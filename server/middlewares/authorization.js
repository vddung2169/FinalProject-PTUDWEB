const jwt = require('jsonwebtoken')
require('dotenv').config()



const authorizationAdmin = async (req,res,next) =>{

    try {

        const token = req.session.token
        
        if(token){
            const payload = jwt.verify(token,process.env.SECRET_KEY)
            req.user = payload.userID
            next()
        }
        else{
            res.redirect('/admin/login')
           
        }
       
        

    } catch (error) {
        console.error(error.message + ' at authorization.js')
        res.status(401).json(false)
    }
}

const authorizationUser = async (req,res,next,successRedirect,failRedirect) => {
    try {

        const token = req.session.token
        
        if(token){
            const payload = jwt.verify(token,process.env.SECRET_KEY)
            req.accountType = 'system'
            req.user = payload.userID
            if(successRedirect) res.redirect(successRedirect)
            else next()
        }
        else if(req.session.passport){
            req.accountType = 'google'
            req.user = req.session.passport.user
            if(successRedirect) res.redirect(successRedirect)
            else next()
        }
        else{
            if(failRedirect) {
                res.redirect(failRedirect)
            }else{
                next()
            }
            
            //res.status(401).json(false)
        }
       
        

    } catch (error) {
        console.error(error.message + ' at authorization.js')
        res.render('notfound404',{error : "401: " + error.message})
        // res.status(401).json(false)
    }
} 



module.exports = {
    authorizationAdmin,
    authorizationUser
};


