const nodemailer = require('nodemailer')
require('dotenv').config()
const userGmail = process.env.USER_GMAIL
const passwordGmail = process.env.PASSWORD_GMAIL
const path = require('path')
const hbs = require('handlebars')
const fs = require('fs')

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

const sendEmailTicketPDF = async (subject,receiver,filename) =>{
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

        const emailTemplate = fs.readFileSync(path.join(__dirname,'../../client/public/templates/ticketSendPDF.hbs'),"utf8")

        const emailTemplateCompiled = hbs.compile(emailTemplate)
    
        const context = emailTemplateCompiled({url : URL})

        const optionEmail = {
            from : userGmail,
            to : receiver,
            subject : subject,
            html : context,
            attachments : [{
                filename : 'yourticket.pdf',
                path : path.join(__dirname,'../../client/public/templates/' + filename)
            }]
        }


        const sendNow = await transporter.sendMail(optionEmail)


        fs.unlink(path.join(__dirname,'../../client/public/templates/' + filename) , (error) => {
            if(error){
                console.log('error delete file')
            }else{
                
            }
        })

        console.log(sendNow.messageId)
        return true

    }catch(error){
        console.log(error.message)
        return false
    }
}

const sendEmailTicket = async (subject,receiver,vexe) =>{
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

        const emailTemplate = fs.readFileSync(path.join(__dirname,'../../client/public/templates/ticketSend.hbs'),"utf8")

        const emailTemplateCompiled = hbs.compile(emailTemplate)
    
        const context = emailTemplateCompiled(vexe)

        

        const optionEmail = {
            from : userGmail,
            to : receiver,
            subject : subject,
            html : context,
            
        }
        const sendNow = await transporter.sendMail(optionEmail)


        console.log(sendNow.messageId)
        return true

    }catch(error){
        console.log(error.message)
        return false
    }
}

module.exports = {
    sendEmail,
    sendEmailTicketPDF,
    sendEmailTicket
}