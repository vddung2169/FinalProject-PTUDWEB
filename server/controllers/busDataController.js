const dataController = require('./getDataController')


const renderBus = async(req, res) => {
    try {

        const { tinhbatdau, tinhketthuc,date,sort } = req.query
        const page = req.query.page || 1
        
        const chuyenxe = await dataController.getAllChuyenxeBySearch(tinhbatdau, tinhketthuc,date,sort,page)

        const tinhthanh = await dataController.getAllTinhthanh()

       
        res.render('bus', { chuyenxe, tinhthanh })

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

const renderIndex = async(req, res) => {
    try {

        const makhachhang = req.user

        let user = {
            name : ""
        }
        if(makhachhang){

        }

        const tinhthanh = await dataController.getAllTinhthanh()

        const tuyenduongtop = await dataController.getAllTuyenduongtop()


        res.render('index', { tuyenduongtop, tinhthanh })

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }

}


module.exports = {
    renderBus,
    renderIndex
}