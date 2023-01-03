const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtGenerator = (ID,key = 'SECRET_KEY',expires = '1h') => {
    const payload = {
        userID : ID
    }

    return jwt.sign(payload,process.env[key],{expiresIn : expires})
}

const jwtGeneratorForReset = (ID,email,expires) => {
    const payload = {
        userID : ID,
        email : email
    }

    return jwt.sign(payload,process.env.SECRET_KEY_RESEY,{expiresIn : expires})
}


module.exports = {
    jwtGenerator,
    jwtGeneratorForReset
}