'use strict';
const nhaxe = require('../models').nhaxe
const khachhang = require('../models').khachhang
const danhgia = require('../models').danhgia
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const danhsachkhachhang = await khachhang.findAll({
            attributes: ['makhachhang']
        })
        const danhsachnhaxe = await nhaxe.findAll({
            attributes: ['manhaxe']
        })



        const danhgiadata = [{
                binhluan: 'Tuyệt vời',
                diemso: 5,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe
            },
            {
                binhluan: 'Xe sạch sẽ, tài xế lái cẩn thận',
                diemso: 5,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe
            },
            {
                binhluan: 'Xe đi an toàn, chỉ hơi chậm so với dự kiến',
                diemso: 4,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe
            },
            {
                binhluan: 'Xe mát, đi êm',
                diemso: 5,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe
            },
            {
                binhluan: 'Xe rộng rãi, thoải mái, nhân viên thân thiện',
                diemso: 5,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe
            },
            {
                binhluan: 'Nhân viên nhiệt tình, nội thất xe đầy đủ',
                diemso: 5,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe
            }
        ]

        for (const data of danhgiadata) {
            await danhgia.create(data)
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('danhgia', null, {});
    }
};