const fs = require('fs')
const pdf = require('pdf-creator-node')
const path = require('path')

const createPDF = async (data) => {
    try {
        const html = fs.readFileSync(path.join(__dirname,'../../client/public/templates/template.html'),'utf-8')

        const option = {
            "height": "9in",        
            "width": "3.34in",
            orientation: "portrait",
            border: "0mm"
        }

        const document = {
            html : html,
            data : data,
            path : path.join(__dirname,'../../client/public/templates/ticket.pdf')
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