
require('dotenv').config()
const database = require('../database/models')
const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect:  'postgres'
})
const {QueryTypes} = require('sequelize')


// Tham khảo cách query : https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
// Tham khảo cách inner join 2 table : https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/#required-eager-loading


const getAllTinhthanh = async() =>{
    try {
        const tinhthanh = await database.tinhthanh.findAll({
            attributes : ['matinh','tentinh'],
            raw : true
        })

        return  tinhthanh

    } catch (error) {
        console.log(error.message);
    }


}

const getAllTuyenduongtop = async () => {
    try {
        const tuyenduongtop = await database.tuyenduongtop.findAll({
            attributes : ['matuyenduong','ten','giachitu'],
            raw : true
        })

        return  tuyenduongtop

    } catch (error) {
        console.log(error.message);
        
    }
}


const getAllChuyenxe = async () => {
    try {
       const data = await sequelize.query('SELECT CX.HINHANHXE,CX.MATUYENDUONG,CX.MACHUYENXE,NX.TENNHAXE,LX.TENLOAIXE,CX.TGKHOIHANH,CX.TGKETTHUC,DCBD.TENDIACHI,DCKT.TENDIACHI,CX.GIAVENHONHAT,DG.DIEMSO FROM CHUYENXE CX INNER JOIN NHAXE NX ON CX.MANHAXE = NX.MANHAXE INNER JOIN DIACHI DCBD ON CX.DIACHIBATDAU = DCBD.MADIACHI INNER JOIN DIACHI DCKT ON CX.DIACHIKETTHUC = DCKT.MADIACHI INNER JOIN LOAIXE LX ON CX.MALOAIXE = LX.MALOAIXE INNER JOIN TUYENDUONG TD ON CX.MATUYENDUONG = TD.MATUYENDUONG INNER JOIN (SELECT NX1.MANHAXE,AVG(DG.DIEMSO) DIEMSO FROM NHAXE NX1 LEFT OUTER JOIN DANHGIA DG ON NX1.MANHAXE = DG.MANHAXE GROUP BY NX1.MANHAXE) DG ON DG.MANHAXE = CX.MANHAXE'
       ,QueryTypes.SELECT)


        // const data = database.chuyenxe.findAll({
        //     include:[
        //         {
        //             model: database.nhaxe,
        //             required: true,
        //             attributes : []
        //         },
        //         {
        //             model: database.diachi,
        //             as :'DCBD',
        //             required: true,
        //             attributes : []
        //         },
        //         {
        //             model: database.diachi,
        //             as: 'DCKT',
        //             required: true,
        //             attributes : []
        //         },
        //         {
        //             model: database.loaixe,
        //             required: true,
        //             attributes : []
        //         },
               

        //     ],
        //     attributes: ['matuyenduong','tgkhoihanh','tgketthuc','hinhanhxe','giavenhonhat',
        //     [sequelize.col('DCBD.tendiachi'), 'diachibatdau'],
        //     [sequelize.col('DCKT.tendiachi'), 'diachiketthuc'],
        //     [sequelize.col('nhaxe.tennhaxe'), 'tennhaxe'],
        //     [sequelize.col('loaixe.tenloaixe'), 'tenloaixe'],
           
        //     ]
        // })

        return data[0]
        
    } catch (error) {
        console.log(error.message);
        
    }

}



const getTuyenduongbyID = (ID) => {
    try {
       
        return testh


    } catch (error) {
        console.log(error.message);
    }


}




module.exports = {
    getAllTinhthanh,
    getAllTuyenduongtop,
    getAllChuyenxe
}