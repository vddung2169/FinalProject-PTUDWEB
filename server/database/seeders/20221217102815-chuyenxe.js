'use strict';
const nhaxe = require('../models').nhaxe
const tuyenduong = require('../models').tuyenduong
const loaixe = require('../models').loaixe
const chuyenxe = require('../models').chuyenxe
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const danhsachtuyenduong = await tuyenduong.findAll({
            attributes: ['matuyenduong']
        })
        const danhsachnhaxe = await nhaxe.findAll({
            attributes: ['manhaxe']
        })
        const danhsachloaixe = await loaixe.findAll({
            attributes: ['maloaixe']
        })


        const chuyenxedata = [{
                matuyenduong: danhsachtuyenduong[0].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2022-12-23 03:00',
                tgketthuc: '2022-12-23 05:00',
                hinhanhxe: '/img/nha-xe-vinh-binh.png',
                mota: '',
            },
            {
                matuyenduong: danhsachtuyenduong[0].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2022-09-28 23:00',
                tgketthuc: '2022-09-29 04:00',
                hinhanhxe: '/img/nha-xe-sapa-express.png',
                mota: '',
            },
            {
                matuyenduong: danhsachtuyenduong[0].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2022-12-20 11:00',
                tgketthuc: '2022-12-20 15:30',
                hinhanhxe: '/img/nha-xe-hoang-yen.png',
                mota: '',
            },
            {
                matuyenduong: danhsachtuyenduong[0].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2022-11-20 04:30',
                tgketthuc: '2022-11-20 15:30',
                hinhanhxe: '/img/nha-xe-phuong-trang.png',
                mota: '',
            },
            {
                matuyenduong: danhsachtuyenduong[0].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2022-12-21 22:20',
                tgketthuc: '2022-12-21 07:35',
                hinhanhxe: '/img/nha-xe-van-minh.png',
                mota: '',
            },
            {
                matuyenduong: danhsachtuyenduong[0].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2023-01-01 11:45',
                tgketthuc: '2023-01-01 14:30',
                hinhanhxe: '/img/nha-xe-an-phu.png',
                mota: '',
            }
        ]

        for (const data of chuyenxedata) {
            await chuyenxe.create(data)
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('chuyenxe', null, {});
    }
};