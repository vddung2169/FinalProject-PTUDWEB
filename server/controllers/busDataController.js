const Chuyenxe = require('../database/models').chuyenxe
const Tuyenduong = require('../database/models').tuyenduong



const moment = require('moment')

// Tham khảo cách query : https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
// Tham khảo cách inner join 2 table : https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/#required-eager-loading


const getAllTuyenxe = () =>{



}

const getAllChuyenxe = async () => {
    try {
        Chuyenxe.findAll({
            include: [{
                model: 
            }]
        }



        )

        


        return testh


    } catch (error) {
        console.log(error.message);
        res.status(500).json(error.message)
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
    getAllTuyenxe,
    getAllChuyenxe
}