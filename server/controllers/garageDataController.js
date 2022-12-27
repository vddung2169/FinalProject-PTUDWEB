accountDataController = require('../controllers/getAccountDataController')
database = require('../database/models')

const dataController = require('./getDataController')


const createGarage = async(req,res) => {
    try {
       const {tennhaxe,hinhanhnhaxe,sodienthoai} = req.body
       userInfo = await accountDataController.getAnAccountByID(req.user)
       
        const newNhaxe = await database.nhaxe.create({
            tennhaxe : tennhaxe,
            hinhanh :hinhanhnhaxe,
            sodienthoai: sodienthoai,
            maquantri: userInfo[0].maquantri
        })

        res.redirect('/admin/viewgarage')

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }



}

const viewAllNhaxe = async(req,res,view) => {
    try {
        userInfo = await accountDataController.getAnAccountByID(req.user)
        const data = await dataController.getAllNhaxe()

        const nhaxe =data[0]

        res.render(view,{nhaxe})


    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}



module.exports = {
    createGarage,
    viewAllNhaxe
}