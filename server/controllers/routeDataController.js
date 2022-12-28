accountDataController = require('../controllers/getAccountDataController')
database = require('../database/models')

const dataController = require('./getDataController')


const createRoute = async(req,res) => {
    try {
       const {manhaxe,diachibatdau,diachiketthuc,startTime,endTime,img,
            maloaixe,description,price} = req.body
       //userInfo = await accountDataController.getAnAccountByID(req.user)
       
        const newChuyenxe = await database.chuyenxe.create({
           manhaxe : manhaxe,
           tgkhoihanh:startTime,
           tgketthuc:endTime,
           diachibatdau:diachibatdau,
           diachiketthuc:diachiketthuc,
           giavenhonhat:price,
           hinhanhxe:img,
           mota:description,
           maloaixe:maloaixe
        })

        res.redirect('/admin')

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }



}

const viewRouteAdd = async(req,res) => {
    try {
        userInfo = await accountDataController.getAnAccountByID(req.user)
        const nhaxe = await dataController.getAllNhaxe(userInfo[0].maquantri)
        const diachi = await dataController.getAllDiachi()
        const loaixe = await dataController.getAllLoaixe()
        

        res.render('addroute',{nhaxe,diachi,loaixe})


    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

const viewRoute = async(req,res,view) => {
    try {
        userInfo = await accountDataController.getAnAccountByID(req.user)
        const nhaxe = await dataController.getAllNhaxe(userInfo[0].maquantri)
        const chuyenxe = await dataController.getAllChuyenxeAdmin(userInfo[0].maquantri)
        const diachi = await dataController.getAllDiachi()
        const loaixe = await dataController.getAllLoaixe()
        

        res.render(view,{nhaxe,diachi,loaixe,chuyenxe})


    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

const updateRoute = async(req,res) => {
    try {

       
        const {machuyenxe,manhaxe,diachibatdau,diachiketthuc,startTime,endTime,img,
            maloaixe,description,price} = req.body
      
       
        console.log({machuyenxe})

       
        const routeUpdate = await database.chuyenxe.findOne({
            where : {
                machuyenxe : machuyenxe
            }
        })

        routeUpdate.manhaxe = manhaxe
        routeUpdate.tgkhoihanh=startTime
        routeUpdate.tgketthuc=endTime
        routeUpdate.diachibatdau=diachibatdau
        routeUpdate.diachiketthuc=diachiketthuc
        routeUpdate.giavenhonhat=price
        routeUpdate.hinhanhxe=img
        routeUpdate.mota=description
        routeUpdate.maloaixe=maloaixe

        routeUpdate.save()
       
        res.redirect('/admin')

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

const removeRoute = async(req,res) => {
    try {

        const {machuyenxe} = req.body

       
        const routeRemove = await database.chuyenxe.destroy({
            where : {
                machuyenxe : machuyenxe
            }
        })
       
        res.redirect('/admin')

    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}



module.exports = {
    viewRouteAdd,
    viewRoute,
    createRoute,
    updateRoute,
    removeRoute
}