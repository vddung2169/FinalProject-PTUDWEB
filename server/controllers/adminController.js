const accountDataController = require('./getAccountDataController')
const dataController = require('./getDataController')

const renderAdmin = async(req,res) => {
    try {
        const data = await accountDataController.getAnAdminAccountByID(req.user)

        const adminInfor = data[0]

        const nhaxe = await dataController.getAllNhaxeAdmin(req.user)

        res.render('admin',{adminInfor,nhaxe})


    } catch (error) {
        
    }


}

module.exports = {renderAdmin}