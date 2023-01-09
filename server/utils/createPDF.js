const fs = require('fs')
const pdf = require('pdf-creator-node')
const path = require('path')

const createPDF = async (data) => {
    try {
        const html = fs.readFileSync(path.join(__dirname,'../../client/public/template.html'),'utf-8')

        const option = {
            "height": "6in",        
            "width": "4in",
            orientation: "portrait",
            border: "10mm"
        }

        const document = {
            html : html,
            data : data,
            path : path.join(__dirname,'../../client/public/ticket.pdf')
        }

        const generatePDF = await pdf.create(document,option)

        console.log(generatePDF)

        return true

    } catch (error) {
        console.log(error.message)
        return false
    }
}

module.exports = createPDF