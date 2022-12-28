accountDataController = require('../controllers/getAccountDataController')
database = require('../database/models')

const dataController = require('./getDataController')




const viewSeat = async(req,res) => {
    try {
        
        const vexe = await dataController.getAllVexeAdmin(req.user)
        

        res.render('viewseat',{vexe})


    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

const viewSeatUpdate = async(req,res) => {
    try {
        maquantri = '040457b0-b965-476f-b810-129377cbabaf'
        const vexe = await dataController.getAllVexeAdmin(req.user)
        const chuyenxe = await dataController.getAllChuyenxeAdmin(req.user)
        
        

        res.render('updateseat',{vexe,chuyenxe})


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





module.exports = {
    viewSeat,
    viewSeatUpdate
}