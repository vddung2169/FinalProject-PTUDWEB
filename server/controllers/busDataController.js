const dataController = require('./getDataController')


const renderBus = async(req, res) => {
    try {
        // Mục đích công việc này là đọc hiểu code getDataController.js
        // coi ví dụ bên busDataController_copy.js
        // TODO : Lấy dữ liệu tỉnh thành và truyền vào index.hbs
        //const tinhthanh

        const tinhthanh = await dataController.getAllTinhthanh()
        res.render('index', { tinhthanh })
            // TODO lấy dữ liệu tất cả chuyến xe và truyền vào bus.hbs
        const chuyenxe = await dataController.getAllChuyenxe()
        res.render('bus', { chuyenxe })




    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }

}




module.exports = {
    renderBus
}