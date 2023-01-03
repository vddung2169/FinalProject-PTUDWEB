const database = require('../database/models')
const { Op } = require("sequelize");

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

const getAnGoogleAccount =async (email,googleID) => {
    try {
        let account = null
        if(email){
            account = await database.khachhang.findAll({
                attributes : ['makhachhang','tenkhachhang','email','matkhau','sodienthoai','googleID'],
                where : {
                    [Op.or] : [
                        {email:email},
                        {googleID:googleID}
                    ]
                },
                raw : true
            })    
        }else{
            account = await database.khachhang.findAll({
                attributes : ['makhachhang','tenkhachhang','email','matkhau','sodienthoai','googleID'],
                where : {
                    googleID:googleID
                },
                raw : true
            })    
        }
        
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

const updatePassword = async (id,newPassword) => {
    try {
        const account = await database.khachhang.findOne({
            where : {
                makhachhang : id
            }
        })

        account.matkhau = newPassword
        account.save()

    } catch (error) {
        console.log(error.message)
    }
}

const createAnGoogleAccount = async (name,googleID,email) => {
    try {
        const newAccount = await database.khachhang.create({
            tenkhachhang : name,
            googleID : googleID,
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
    getAnAccountByID,
    getAnGoogleAccount,
    createAnGoogleAccount,
    updatePassword
}