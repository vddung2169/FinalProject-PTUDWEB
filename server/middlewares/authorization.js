const jwt = require('jsonwebtoken')
require('dotenv').config()



const authorization = async (req,res,next) =>{

    try {

        const token = req.session.token
        
        if(token){
            const payload = jwt.verify(token,process.env.SECRET_KEY)
            req.userType = 'system'
            req.user = payload.userID
            next()
        }
        else{
            res.redirect('/admin/login')
            //res.status(401).json(false)
        }
        // const token = req.header("jwtToken")
        // if(token !== 'undefined'){
        //     const payload = jwt.verify(token,process.env.SECRET_KEY)

        // // USER = ID
        //     req.userType = 'system'
        //     req.user = payload.userID
        //     next()
        // }
        // else if(req.session.passport !== undefined){
        //     req.userType = 'google'
        //     req.user = req.session.passport.user
        //     next()
        // }
        // else{
        //     res.status(401).json(false)
        // }
        

    } catch (error) {
        console.error(error.message + ' at authorization.js')
        res.status(401).json(false)
    }
}




module.exports = authorization;


