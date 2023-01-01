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

const authorizationUser = async (req,res,redirect) => {
    try {

        const token = req.session.token
        
        if(token){
            const payload = jwt.verify(token,process.env.SECRET_KEY)
            req.user = payload.userID
            next()
        }
        else{
            if(redirect) {
                res.redirect(redirect)
            }
            
            //res.status(401).json(false)
        }
       
        

    } catch (error) {
        console.error(error.message + ' at authorization.js')
        res.status(401).json(false)
    }
} 



module.exports = {
    authorizationAdmin,
    authorizationUser
};


