const dataController = require('./getDataController')


<<<<<<< HEAD
const getAllTuyenxe = (req, res) => {
=======
const renderBus = async(req, res) => {
    try {

        const {tinhbatdau,tinhketthuc} = req.query
      
        

        const tinhthanh = await dataController.getAllTinhthanh()
        const chuyenxe = await dataController.getAllChuyenxe()
>>>>>>> c69fbf50063b0852ca2f994a5036deef732dfa10

        res.render('bus', { chuyenxe,tinhthanh })

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

<<<<<<< HEAD
const getAllChuyenxe = (req, res) => {
=======
const renderIndex = async (req,res) => {
    try {
       
       
        const tinhthanh = await dataController.getAllTinhthanh()
>>>>>>> c69fbf50063b0852ca2f994a5036deef732dfa10

        const tuyenduongtop = await dataController.getAllTuyenduongtop()

       
        res.render('index',{tuyenduongtop,tinhthanh})

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }

}


<<<<<<< HEAD
=======



>>>>>>> c69fbf50063b0852ca2f994a5036deef732dfa10
module.exports = {
    renderBus,
    renderIndex
}