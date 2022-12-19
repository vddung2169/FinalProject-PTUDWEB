'use strict';
const chuyenxe = require('../models').chuyenxe
const khachhang = require('../models').khachhang
const vexe = require('../models').vexe
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const danhsachkhachhang = await khachhang.findAll({
            attributes: ['makhachhang']
        })
        const danhsachchuyenxe = await chuyenxe.findAll({
            attributes: ['machuyenxe']
        })



        const vexedata = [{
                tinhtrang: 'Đã thanh toán',
                tongtien: 650000,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                machuyenxe: danhsachchuyenxe[0].dataValues.machuyenxe
            },
            {
                tinhtrang: 'Đã thanh toán',
                tongtien: 350000,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                machuyenxe: danhsachchuyenxe[0].dataValues.machuyenxe
            },
            {
                tinhtrang: 'Đã thanh toán',
                tongtien: 1450000,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                machuyenxe: danhsachchuyenxe[0].dataValues.machuyenxe
            },
            {
                tinhtrang: 'Đã thanh toán',
                tongtien: 200000,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                machuyenxe: danhsachchuyenxe[0].dataValues.machuyenxe
            },
            {
                tinhtrang: 'Đã thanh toán',
                tongtien: 500000,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                machuyenxe: danhsachchuyenxe[0].dataValues.machuyenxe
            },
            {
                tinhtrang: 'Đã thanh toán',
                tongtien: 2000000,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                machuyenxe: danhsachchuyenxe[0].dataValues.machuyenxe
            }
        ]

        for (const data of vexedata) {
            await vexe.create(data)
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('vexe', null, {});
    }
};