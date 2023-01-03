const nodemailer = require('nodemailer')
require('dotenv').config()
const userGmail = process.env.USER_GMAIL
const passwordGmail = process.env.PASSWORD_GMAIL

// - Context = html string, receiver = email of receiver
const sendEmail = async (subject,context,receiver) => {
    try{
        const transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : userGmail,
                pass : passwordGmail
            },
            tls : {
                rejectUnauthorized : false
            }
        })

        const optionEmail = {
            from : userGmail,
            to : receiver,
            subject : subject,
            html : context
        }

        const sendNow = await transporter.sendMail(optionEmail)

        console.log(sendNow.messageId)
        return true

    }catch(error){
        console.log(error.message)
        return false
    }

}

module.exports = sendEmail