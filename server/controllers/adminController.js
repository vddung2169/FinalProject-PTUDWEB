const accountDataController = require('./getAccountDataController')

const renderAdmin = async(req,res) => {
    try {
        const adminInfo = await accountDataController.getAnAdminAccountByID(req.user)

        res.render('admin',{adminInfo})


    } catch (error) {
        
    }


}

module.exports = {renderAdmin}