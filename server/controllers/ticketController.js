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


const newTicket =async (req,res) => {
    try {
        const ticket = req.body

        //TODO 1: kiểm tra ghế

        const checkSolt = await dataController.checkSlot(ticket.maghe,ticket.machuyenxe)

        if(checkSolt){
            return res.json(false)
        }
        // TODO 2: tạo ghế mới 'Vừa đặt'

        const mave = await dataController.createNewTicket(ticket)


        // TODO3: trả mã vé

        res.json({mave})

    } catch (error) {
        console.log(error.message)
        res.render('notfound404',{error : '500' + error.message})
    }
}

const buyTicket = async (req,res,status) => {
    try {
        const {mave} = req.body
        let statusTicket = 'Đã hủy'
        // TODO cập nhật đã thanh toán
        if(status == 'SUCCESS'){
            statusTicket = 'Đã thanh toán'
        }
        const vexe = await dataController.updateTicket(mave,statusTicket)

        res.json(true)

    } catch (error) {
        console.log(error.message)
        res.render('notfound404',{error : '500' + error.message})
    }
}




module.exports = {
    prepareTicket,
    newTicket,
    buyTicket
}