const database = require('../database/models')

const getAnAdminAccountByID = async (ID) => {
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

const getAnAccountByID = async (makhachhang) => {
    try {
        const account = await database.khachhang.findAll({
            attributes : ['makhachhang','tenkhachhang','email','sodienthoai'],
            where : {
                makhachhang : makhachhang
            },
            raw : true
        })

        return account

    } catch (error) {
        console.log(error.message);
    }
}

const getAnAccountByEmail = async (email) => {
    try {
        const account = await database.khachhang.findAll({
            attributes : ['makhachhang','tenkhachhang','email','matkhau','sodienthoai'],
            where : {
                email:email
            },
            raw : true
        })

        return account

    } catch (error) {
        console.log(error.message);
    }
}

const createAnAccount = async (name,password,email) => {
    try {
        const newAccount = await database.khachhang.create({
            tenkhachhang : name,
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
    getAnAdminAccountByID,
    getAnAccountByEmail,
    createAnAccount,
    getAnAccountByID
}