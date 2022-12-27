accountDataController = require('../controllers/getAccountDataController')
database = require('../database/models')
const {Sequelize,QueryTypes} = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect:  'postgres'
})


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

const getAllNhaxe = async(req,res) => {
    try {
        userInfo = await accountDataController.getAnAccountByID(req.user)
        const data = await sequelize.query('SELECT NX.MANHAXE,NX.TENNHAXE,NX.SODIENTHOAI,NX.HINHANH,DS.DIEMSO '+ 
        'FROM NHAXE NX LEFT OUTER JOIN (SELECT NX1.MANHAXE,AVG(DG.DIEMSO) DIEMSO FROM NHAXE NX1 LEFT OUTER JOIN DANHGIA DG ' + 
        'ON NX1.MANHAXE = DG.MANHAXE GROUP BY NX1.MANHAXE) DS ON NX.MANHAXE = DS.MANHAXE '+
        `WHERE NX.MAQUANTRI = '${userInfo[0].maquantri}'`,QueryTypes.SELECT)

        const nhaxe =data[0]

        res.render('viewgarage',{nhaxe})


    } catch (error) {
        console.log(error.message)
        res.status(500).json(error.message)
    }
}

module.exports = {
    createGarage,
    getAllNhaxe
}