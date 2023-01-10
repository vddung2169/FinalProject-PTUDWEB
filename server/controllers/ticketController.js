const dataController = require('./getDataController')
const formatTime = require('../utils/formatTime')
const formatPrice = require('../utils/formatMoney')
const createPDF = require('../utils/createPDF')
const {sendEmailTicket} = require('../utils/sendMail')

const prepareTicket = async (req,res) =>{
    try {
        const {machuyenxe} = req.body

        const rawdata = await dataController.getInforFromChuyenxe(machuyenxe)


        const data = {
            tennhaxe : rawdata.tennhaxe,
            tenloaixe : rawdata.tenloaixe,
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

        res.json(mave)

    } catch (error) {
        console.log(error.message)
        res.render('notfound404',{error : '500' + error.message})
    }
}

const buyTicket = async (req,res,status) => {
    try {
        const {detail} = req.body
        let statusTicket = 'Đã hủy'
        if(status == 'SUCCESS'){
            statusTicket = 'Đã thanh toán'
        }
        await dataController.updateTicket(detail.mave,statusTicket)


        // TODO 2: Gửi email người với vé

        if(status == 'SUCCESS'){
            detail.tongtien = formatPrice(detail.totalPrice) + " đ"
            detail.slot = detail.maghe.join(',')

            const filename = await createPDF(detail)

            const sendResult = await sendEmailTicket('Your bus ticket !',detail.email,filename)


            // TODO remove ticket
            if(sendResult){

                

                res.json(true)
            }else{
                res.json(false)
            }
            
        }else{
            res.json(false)
        }

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