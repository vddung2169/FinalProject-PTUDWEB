const jwt = require('jsonwebtoken')
require('dotenv').config()

const validateReset = async (req,res,next) =>{

    try {
        const token = req.query.rs

        if(token){
            const payload = jwt.verify(token,process.env.SECRET_KEY_RESEY)
            // USER = ID
            req.session.user = payload.userID
            res.locals.email = payload.email
            
            next()
        }
        else{
            req.session.destroy()
            res.render('notfound404',{error:"Your reset request is incorrect or expired"})
        }
        
        

    } catch (error) {
        console.error(error.message)
        res.render('notfound404',{error:"Your reset request is incorrect or expired"})
        // res.render('notification',{notification : 'Your reset request is incorrect or expired'})
    }
}




module.exports = validateReset;


