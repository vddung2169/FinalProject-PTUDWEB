const accountDataController = require('./getAccountDataController')

const renderAdmin = async(req,res) => {
    try {
        const data = await accountDataController.getAnAdminAccountByID(req.user)

        const adminInfor = data[0]

        

        res.render('admin',{adminInfor})


    } catch (error) {
        
    }


}

module.exports = {renderAdmin}