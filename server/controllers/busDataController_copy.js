const dataController = require('./getDataController')


const renderIndex = async (req,res) => {
    try {
         // Mục đích công việc này là đọc hiểu code getDataController.js
        // TODO : Lấy dữ liệu tỉnh thành và truyền vào index.hbs
        //const tinhthanh
       


        const tuyenduongtop = await dataController.getAllTuyenduongtop()

        //console.log(tuyenduongtop)

        res.render('index',{tuyenduongtop})
        //res.render('index',{tuyenduongtop,tinhthanh})

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }

}




module.exports = {
    renderIndex
}