'use strict';
const chuyenxe = require('../models').chuyenxe
const khachhang = require('../models').khachhang
const vexe = require('../models').vexe
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const danhsachkhachhang = await khachhang.findAll({
            attributes: ['makhachhang'],
            order: [
                ['createdAt', 'ASC'],
            ]
        })
        const danhsachchuyenxe = await chuyenxe.findAll({
            attributes: ['machuyenxe'],
            order: [
                ['createdAt', 'ASC'],
            ]
        })



        const vexedata = [{
                tinhtrang: 'Đã thanh toán',
                tongtien: 450000,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                machuyenxe: danhsachchuyenxe[0].dataValues.machuyenxe
            },
            {
                tinhtrang: 'Đã thanh toán',
                tongtien: 150000,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                machuyenxe: danhsachchuyenxe[1].dataValues.machuyenxe
            },
            {
                tinhtrang: 'Đã thanh toán',
                tongtien: 300000,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                machuyenxe: danhsachchuyenxe[4].dataValues.machuyenxe
            },
            {
                tinhtrang: 'Đã thanh toán',
                tongtien: 150000,
                makhachhang: danhsachkhachhang[1].dataValues.makhachhang,
                machuyenxe: danhsachchuyenxe[4].dataValues.machuyenxe
            },
            {
                tinhtrang: 'Đã thanh toán',
                tongtien: 150000,
                makhachhang: danhsachkhachhang[2].dataValues.makhachhang,
                machuyenxe: danhsachchuyenxe[0].dataValues.machuyenxe
            },
            {
                tinhtrang: 'Đã thanh toán',
                tongtien: 150000,
                makhachhang: danhsachkhachhang[3].dataValues.makhachhang,
                machuyenxe: danhsachchuyenxe[3].dataValues.machuyenxe
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