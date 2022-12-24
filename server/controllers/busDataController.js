const dataController = require('./getDataController')


const renderBus = async(req, res) => {
    try {
        const tinhthanh = await dataController.getAllTinhthanh()
        const chuyenxe = await dataController.getAllChuyenxe()

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