const dataController = require('./getDataController')
const formatTime = require('../utils/formatTime')


const prepareTicket = async (req,res) =>{
    try {
        const {machuyenxe} = req.body

        const rawdata = await dataController.getInforFromChuyenxe(machuyenxe)

        const data = {
            tennhaxe : rawdata.tennhaxe,
            diachibatdau :  rawdata.diachibatdau,
            diachiketthuc : rawdata.diachiketthuc,
            tgkhoihanh : formatTime.formatHoursDay(rawdata.tgkhoihanh),
            tgketthuc : formatTime.formatHoursDay(rawdata.tgketthuc)
        }

        res.json(data)
        //res.render('payment',{ticketdetail})
        
    } catch (error) {
        console.log(error.message)
        res.render('notfound404',{error : '500' + error.message})
    }

}

module.exports = {
    prepareTicket
}