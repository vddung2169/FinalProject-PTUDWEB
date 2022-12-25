const dataController = require('./getDataController')


const renderBus = async(req, res) => {
    try {

        const {tinhbatdau,tinhketthuc} = req.query
        let chuyenxe = await dataController.getAllChuyenxe()


        if(tinhbatdau !== undefined && tinhketthuc !== undefined){
            chuyenxe = await dataController.getAllChuyenxeBy2Tinh(tinhbatdau,tinhketthuc)
        }

        const tinhthanh = await dataController.getAllTinhthanh() 

        res.render('bus', { chuyenxe,tinhthanh })

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

const renderIndex = async (req,res) => {
    try {
       
       
        const tinhthanh = await dataController.getAllTinhthanh()

        const tuyenduongtop = await dataController.getAllTuyenduongtop()

       
        res.render('index',{tuyenduongtop,tinhthanh})

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }

}





module.exports = {
    renderBus,
    renderIndex
}