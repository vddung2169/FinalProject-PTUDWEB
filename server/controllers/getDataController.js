
require('dotenv').config()
const database = require('../database/models')
const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect:  'postgres'
})
const {QueryTypes,Op} = require('sequelize')
const LIMIT = 6


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
            include : [
                {
                    model : database.tuyenduong,
                    require : true,
                    attributes : []
                }

            ],
            attributes : ['matuyenduong','ten','giachitu','hinhanh',
            sequelize.col('tuyenduong.tinhbatdau'),sequelize.col('tuyenduong.tinhketthuc')],
            raw : true
        })

        return  tuyenduongtop

    } catch (error) {
        console.log(error.message);
        
    }
}


const getAllChuyenxe = async () => {
    try {
       const data = await sequelize.query('SELECT CX.HINHANHXE,CX.MATUYENDUONG,CX.MACHUYENXE,NX.TENNHAXE,CX.MANHAXE,LX.TENLOAIXE,CX.TGKHOIHANH,CX.TGKETTHUC,'+
       'DCBD.TENDIACHI TENDIACHIKHOIHANH,DCKT.TENDIACHI TENDIACHIKETTHUC,CX.GIAVENHONHAT,DG.DIEMSO'+
       ' FROM CHUYENXE CX INNER JOIN NHAXE NX ON CX.MANHAXE = NX.MANHAXE INNER JOIN DIACHI DCBD ON CX.DIACHIBATDAU = DCBD.MADIACHI' +
        ' INNER JOIN DIACHI DCKT ON CX.DIACHIKETTHUC = DCKT.MADIACHI INNER JOIN LOAIXE LX ON CX.MALOAIXE = LX.MALOAIXE INNER JOIN TUYENDUONG TD ON CX.MATUYENDUONG = TD.MATUYENDUONG INNER JOIN '+
        ' (SELECT NX1.MANHAXE,AVG(DG.DIEMSO) DIEMSO FROM NHAXE NX1 LEFT OUTER JOIN DANHGIA DG ON NX1.MANHAXE = DG.MANHAXE GROUP BY NX1.MANHAXE) DG ON DG.MANHAXE = CX.MANHAXE'
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

      

        for (let index = 0; index < data[0].length; index++) {
            const danhgia = await database.danhgia.findAll({
             include : [{
                model : database.khachhang,
                require : true,
                attributes : []
             }],
             attributes: ['binhluan','diemso',sequelize.col('khachhang.tenkhachhang')],
             where:{
                 manhaxe : data[0][index].manhaxe
             },
             raw : true
            })
            
          
            data[0][index].danhgia = danhgia
         }

        return data[0]
        
    } catch (error) {
        console.log(error.message);
        
    }

}

const getAllChuyenxeByTuyenduong = async() => {
    try {
        const data = await sequelize.query('SELECT TD.TINHBATDAU,TD.TINHKETTHUC, CX.HINHANHXE,CX.MATUYENDUONG,CX.MACHUYENXE,NX.TENNHAXE,LX.TENLOAIXE,CX.TGKHOIHANH,CX.TGKETTHUC,DCBD.TENDIACHI,DCKT.TENDIACHI,CX.GIAVENHONHAT,DG.DIEMSO'+
        ' FROM CHUYENXE CX INNER JOIN NHAXE NX ON CX.MANHAXE = NX.MANHAXE INNER JOIN DIACHI DCBD ON CX.DIACHIBATDAU = DCBD.MADIACHI' +
         ' INNER JOIN DIACHI DCKT ON CX.DIACHIKETTHUC = DCKT.MADIACHI INNER JOIN LOAIXE LX ON CX.MALOAIXE = LX.MALOAIXE INNER JOIN TUYENDUONG TD ON CX.MATUYENDUONG = TD.MATUYENDUONG INNER JOIN '+
         ' (SELECT NX1.MANHAXE,AVG(DG.DIEMSO) DIEMSO FROM NHAXE NX1 LEFT OUTER JOIN DANHGIA DG ON NX1.MANHAXE = DG.MANHAXE GROUP BY NX1.MANHAXE) DG ON DG.MANHAXE = CX.MANHAXE'
        ,QueryTypes.SELECT)

       

        for (let index = 0; index < data[0].length; index++) {
           const diemdon = await database.diachi.findAll({
            attributes: ['tendiachi','diachicuthe'],
            where:{
                matinh : data[0][index].tinhbatdau
            }
           })
           const diemden = await database.diachi.findAll({
            attributes: ['tendiachi','diachicuthe'],
            where:{
                matinh :  data[0][index].tinhketthuc
            }
           })

           data[0][index].diemdon = diemdon
           data[0][index].diemden = diemden

        }
       
        return data[0]


    } catch (error) {
        console.log(error.message);
    }

}


const getAllChuyenxeBySearch = async(tinhbatdau,tinhketthuc,thoigian,sort,tennhaxe,page) => {
    try {
        QUERY = 'SELECT count(*) OVER() AS FULL_COUNT,CX.HINHANHXE,CX.MATUYENDUONG,CX.MACHUYENXE,NX.TENNHAXE,CX.MANHAXE,CX.MALOAIXE,LX.TENLOAIXE,CX.TGKHOIHANH,CX.TGKETTHUC,' + 
        'DCBD.MADIACHI MABATDAU, DCKT.MADIACHI MAKETTHUC, ' + 
        'DCBD.TENDIACHI TENDIACHIKHOIHANH,DCKT.TENDIACHI TENDIACHIKETTHUC,CX.GIAVENHONHAT,DG.DIEMSO,CX.MOTA'+
        ' FROM CHUYENXE CX INNER JOIN NHAXE NX ON CX.MANHAXE = NX.MANHAXE INNER JOIN DIACHI DCBD ON CX.DIACHIBATDAU = DCBD.MADIACHI' +
         ' INNER JOIN DIACHI DCKT ON CX.DIACHIKETTHUC = DCKT.MADIACHI INNER JOIN LOAIXE LX ON CX.MALOAIXE = LX.MALOAIXE INNER JOIN TUYENDUONG TD ON CX.MATUYENDUONG = TD.MATUYENDUONG INNER JOIN '+
         ' (SELECT NX1.MANHAXE,AVG(DG.DIEMSO) DIEMSO FROM NHAXE NX1 LEFT OUTER JOIN DANHGIA DG ON NX1.MANHAXE = DG.MANHAXE GROUP BY NX1.MANHAXE) DG ON DG.MANHAXE = CX.MANHAXE '

        if(tinhbatdau || tinhketthuc || thoigian || tennhaxe){
            QUERY += 'WHERE '
        }
        CONDITION = []

        if(tinhbatdau){
            CONDITION.push(`TD.TINHBATDAU = '${tinhbatdau}'`)
        }

        if(tinhketthuc){
            CONDITION.push(`TD.TINHKETTHUC = '${tinhketthuc}'`) 
        }

        if(tennhaxe){
            CONDITION.push(`NX.TENNHAXE ILIKE '%${tennhaxe}%'`)
        }

        if(thoigian){
            CONDITION.push(`CX.TGKHOIHANH > '${thoigian}' ORDER BY ABS(DATE_PART('day','${thoigian}' - CX.TGKHOIHANH))`)
        }

        WHERE = CONDITION.join(' AND ')
        QUERY += WHERE

        if(sort){
            QUERY += ` ORDER BY CX.GIAVENHONHAT ${sort}`
        }

    

        QUERY += ` LIMIT ${LIMIT} OFFSET ${LIMIT*(page - 1)}`

        const data = await sequelize.query(QUERY
        ,QueryTypes.SELECT)
       
        for (let index = 0; index < data[0].length; index++) {
            const danhgia = await database.danhgia.findAll({
             include : [{
                model : database.khachhang,
                require : true,
                attributes : []
             }],
             attributes: ['binhluan','diemso',sequelize.col('khachhang.tenkhachhang')],
             where:{
                 manhaxe : data[0][index].manhaxe
             },
             raw : true
            })

            const ghedat = await database.ghedat.findAll({
                where:{
                    machuyenxe : data[0][index].machuyenxe
                },
                attributes : ['maghe'],
                raw : true
            })
            const ghexe = await database.ghexe.findAll({
                where:{
                    maloaixe : data[0][index].maloaixe
                },
                attributes : ['maghe','maloaighe'],
                raw : true
            })
            
          //TODO only need slot left
            data[0][index].danhgia = danhgia
            data[0][index].ghedat = ghedat
            data[0][index].ghexe = ghexe
         }



        return data[0]


    } catch (error) {
        console.log(error.message);
    }

}

const getAllSeat = async(machuyenxe,maloaixe) => {
    const ghedat = await database.ghedat.findAll({
        where:{
            machuyenxe : machuyenxe
        },
        attributes : ['maghe'],
        raw : true
    })
    const ghexe = await database.ghexe.findAll({
        include:[{
            model : database.loaighe,
            required : true,
            attributes : []
        }],
        where:{
            maloaixe : maloaixe
        },
        attributes : ['maghe',sequelize.col('loaighe.giaghe')],
        order: [
            ['maghe','ASC']
        ],
        raw : true
    })

    return {ghedat,ghexe}
}

const getDiachi2Noi = async(mabatdau,maketthuc) => {
    try {
        const diachi = await database.diachi.findAll({
            where : {
                [Op.or]: [
                  { madiachi: mabatdau },
                  { madiachi: maketthuc }
                ]
              },
            attributes : ['madiachi','tendiachi','diachicuthe'],
            raw: true
        })

        return diachi

    } catch (error) {
        console.log(error.message)
    }
}



const getAllNhaxe =async (maquantri) => {
    try {
        const data = await sequelize.query('SELECT NX.MANHAXE,NX.TENNHAXE,NX.SODIENTHOAI,NX.HINHANH,DS.DIEMSO '+ 
        'FROM NHAXE NX LEFT OUTER JOIN (SELECT NX1.MANHAXE,AVG(DG.DIEMSO) DIEMSO FROM NHAXE NX1 LEFT OUTER JOIN DANHGIA DG ' + 
        'ON NX1.MANHAXE = DG.MANHAXE GROUP BY NX1.MANHAXE) DS ON NX.MANHAXE = DS.MANHAXE '+
        `WHERE NX.MAQUANTRI = '${maquantri}'`,QueryTypes.SELECT)

        return data[0]
    } catch (error) {
        console.log(error.message)
    }
}


const getAllDiachi = async () => {
    try {
        const diachi = await database.diachi.findAll({
            attributes : ['madiachi','tendiachi','diachicuthe'],
            raw : true
        })

        return  diachi

    } catch (error) {
        console.log(error.message);
        
    }
}

const getAllLoaixe = async () => {
    try {
        const loaixe = await database.loaixe.findAll({
            attributes : ['maloaixe','tenloaixe'],
            raw : true
        })

        return  loaixe

    } catch (error) {
        console.log(error.message);
        
    }
}

const getAllChuyenxeAdmin = async (maquantri) => {
    try {
        const chuyenxe = await sequelize.query('SELECT CX.MACHUYENXE,NX.MANHAXE,CX.TGKHOIHANH,'+
        'CX.TGKETTHUC,CX.DIACHIBATDAU,CX.DIACHIKETTHUC,CX.GIAVENHONHAT,CX.HINHANHXE,CX.MOTA,CX.MALOAIXE '+   
        'FROM CHUYENXE CX INNER JOIN NHAXE NX ON CX.MANHAXE = NX.MANHAXE INNER JOIN ' + 
        'QUANTRI QT ON NX.MAQUANTRI = QT.MAQUANTRI '+ 
        `WHERE QT.MAQUANTRI ='${maquantri}'`)

        return chuyenxe[0]

    } catch (error) {
        console.log(error.message);
        
    }
}

const getAllVexeAdmin = async(maquantri) => {
    try {
        
        const data = await sequelize.query('SELECT VX.MAVE,VX.MACHUYENXE,VX.MAKHACHHANG,VX.TINHTRANG,VX.TONGTIEN,KH.TENKHACHHANG,KH.SODIENTHOAI,KH.EMAIL '+
        'FROM VEXE VX INNER JOIN CHUYENXE CX ON VX.MACHUYENXE = CX.MACHUYENXE '+
        'INNER JOIN KHACHHANG KH ON KH.MAKHACHHANG = VX.MAKHACHHANG ' + 
        'INNER JOIN NHAXE NX ON CX.MANHAXE = NX.MANHAXE '+ 
        'INNER JOIN QUANTRI QT ON NX.MAQUANTRI = QT.MAQUANTRI '+
        `WHERE QT.MAQUANTRI ='${maquantri}'`)

        for (let index = 0; index < data[0].length; index++) {
            const chitietvexe = await database.vexe.findAll({
                include :[{
                    model : database.ghexe,
                    require:true,
                    attributes: []
                }],
                where : {
                    mave : data[0][index].mave
                },
                attributes : [sequelize.col('ghexes.chitietvexe.ghexeMaghe')],
                raw :true
            })
            data[0][index].chitietvexe = chitietvexe
            
        }


        return data[0]

    } catch (error) {
        console.log(error.message);
    }
}






module.exports = {
    getAllTinhthanh,
    getAllTuyenduongtop,
    getAllChuyenxe,
    getAllChuyenxeBySearch,
    getAllChuyenxeByTuyenduong,
    getAllNhaxe,
    getAllDiachi,
    getAllLoaixe,
    getAllChuyenxeAdmin,
    getAllVexeAdmin,
    getAllSeat,
    getDiachi2Noi
}