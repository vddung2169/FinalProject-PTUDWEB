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
        const userInfo = await accountDataController.getAnAccountByID(req.user)
        const data = await dataController.getAllNhaxe(userInfo[0].maquantri)

        const nhaxe =data

        res.render(view,{nhaxe})


    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

const updateGarage = async(req,res) => {
    try {

       
        const {manhaxe,name,img,phone} = req.body

       
        const garageUpdate = await database.nhaxe.findOne({
            where : {
                manhaxe : manhaxe
            }
        })

        garageUpdate.tennhaxe = name
        garageUpdate.hinhanh = img
        garageUpdate.sodienthoai = phone

        garageUpdate.save()
       
        res.redirect('/admin/viewgarage')

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

const removeGarage = async(req,res) => {
    try {

        const {manhaxe} = req.body

       
        const garageRemove = await database.nhaxe.destroy({
            where : {
                manhaxe : manhaxe
            }
        })
       
        res.redirect('/admin/viewgarage')

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}



module.exports = {
    createGarage,
    viewAllNhaxe,
    updateGarage,
    removeGarage
}