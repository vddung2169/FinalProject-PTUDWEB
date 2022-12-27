const database = require('../database/models')

const getAnAccountByID = async (ID) => {
    try {
        const account = await database.quantri.findAll({
            attributes: ['maquantri','tenquantri','matkhau','email','sodienthoai'],
            where:{
                maquantri : ID
            },
            raw: false
        })

        return account

    } catch (error) {
        console.log(error.message)
    }
}

const getAnAdminAccountByEmail = async (email) => {
    try {
        const account = await database.quantri.findAll({
            attributes: ['maquantri','tenquantri','matkhau','email','sodienthoai'],
            where:{
                email : email
            },
            raw: false
        })

        return account

    } catch (error) {
        console.log(error.message)
    }
}


const createAnAdminAccount = async (name,password,email) => {
    try {
        const newAccount = await database.quantri.create({
            tenquantri : name,
            matkhau : password,
            email : email,
        })

        return newAccount
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getAnAdminAccountByEmail,
    createAnAdminAccount,
    getAnAccountByID
}