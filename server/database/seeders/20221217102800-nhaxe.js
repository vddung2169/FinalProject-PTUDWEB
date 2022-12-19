'use strict';
const nhaxe = require('../models').nhaxe
const quantri = require('../models').quantri
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const danhsachquantri = await quantri.findAll({
            attributes: ['maquantri']
        })

        // Kiểm tra dữ liệu mình lấy đúng k
        //console.log(danhsachquantri)

        const nhaxedata = [{
                tennhaxe: 'Thành Bưởi',
                hinhanh: '/img/nha-xe-thanh-buoi.png',
                sodienthoai: '123456',
                maquantri: danhsachquantri[0].dataValues.maquantri
            },
            {
                tennhaxe: 'Phương Trang',
                hinhanh: '/img/nha-xe-phuong-trang.png',
                sodienthoai: '123456',
            },
            {
                tennhaxe: 'Toàn Thắng',
                hinhanh: '/img/nha-xe-toan-thang.png',
                sodienthoai: '123456',
            },
            {
                tennhaxe: 'Văn Minh',
                hinhanh: '/img/nha-xe-van-minh.png',
                sodienthoai: '123456',
            },
            {
                tennhaxe: 'Đất Việt',
                hinhanh: '/img/nha-xe-dat-viet.png',
                sodienthoai: '123456',
            },
            {
                tennhaxe: 'Hồng Anh',
                hinhanh: '/img/nha-xe-hong-anh.png',
                sodienthoai: '123456',
            },
            {
                tennhaxe: 'Sapa Express',
                hinhanh: '/img/nha-xe-sapa-express.png',
                sodienthoai: '123456',
            },
            {
                tennhaxe: 'Hưng Thành',
                hinhanh: '/img/nha-xe-hung-thanh.png',
                sodienthoai: '123456',
            },
            {
                tennhaxe: 'Vịnh Bình',
                hinhanh: '/img/nha-xe-vinh-binh.png',
                sodienthoai: '123456',
            },
            {
                tennhaxe: 'Mộc Châu Express',
                hinhanh: '/img/nha-xe-mocchau-express.png',
                sodienthoai: '123456',
            },
            {
                tennhaxe: 'An Phú',
                hinhanh: '/img/nha-xe-an-phu.png',
                sodienthoai: '123456',
            },
            {
                tennhaxe: 'Green Canal',
                hinhanh: '/img/nha-xe-green-canal.png',
                sodienthoai: '123456',
            },
            {
                tennhaxe: 'Hoàng Yến',
                hinhanh: '/img/nha-xe-hoang-yen.png',
                sodienthoai: '123456',
            },
            {
                tennhaxe: 'Thiên Thảo Nguyên',
                hinhanh: '/img/nha-xe-thien-thao-nguyen.png',
                sodienthoai: '123456',
            },
        ]

        for (const data of nhaxedata) {
            await nhaxe.create(data)
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('nhaxe', null, {});
    }
};