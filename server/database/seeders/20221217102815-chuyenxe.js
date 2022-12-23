'use strict';
const nhaxe = require('../models').nhaxe
const tuyenduong = require('../models').tuyenduong
const loaixe = require('../models').loaixe
const chuyenxe = require('../models').chuyenxe
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const danhsachtuyenduong = await tuyenduong.findAll({
            attributes: ['matuyenduong'],
            order: [
                ['createdAt', 'ASC'],
            ]
        })
        const danhsachnhaxe = await nhaxe.findAll({
            attributes: ['manhaxe'],
            order: [
                ['createdAt', 'ASC'],
            ]
        })
        const danhsachloaixe = await loaixe.findAll({
            attributes: ['maloaixe'],
            order: [
                ['createdAt', 'ASC'],
            ]
        })


        const chuyenxedata = [{
                matuyenduong: danhsachtuyenduong[4].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2022-12-23 03:00',
                tgketthuc: '2022-12-23 07:00',
                hinhanhxe: '/img/nha-xe-vinh-binh.png',
                mota: '',
                diachibatdau: 1,
                diachiketthuc: 12,
                giavenhonhat: 150000
            },
            {
                matuyenduong: danhsachtuyenduong[4].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[1].dataValues.manhaxe,
                maloaixe: danhsachloaixe[3].dataValues.maloaixe,
                tgkhoihanh: '2022-09-28 23:00',
                tgketthuc: '2022-09-29 04:00',
                hinhanhxe: '/img/nha-xe-sapa-express.png',
                mota: '',
                diachibatdau: 2,
                diachiketthuc: 13,
                giavenhonhat: 150000
            },
            {
                matuyenduong: danhsachtuyenduong[4].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[3].dataValues.manhaxe,
                maloaixe: danhsachloaixe[1].dataValues.maloaixe,
                tgkhoihanh: '2022-12-20 11:00',
                tgketthuc: '2022-12-20 15:30',
                hinhanhxe: '/img/nha-xe-hoang-yen.png',
                mota: '',
                diachibatdau: 2,
                diachiketthuc: 14,
                giavenhonhat: 200000
            },
            {
                matuyenduong: danhsachtuyenduong[1].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[4].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2022-11-20 04:30',
                tgketthuc: '2022-11-20 10:30',
                hinhanhxe: '/img/nha-xe-phuong-trang.png',
                mota: '',
                diachibatdau: 7,
                diachiketthuc: 16,
                giavenhonhat: 200000
            },
            {
                matuyenduong: danhsachtuyenduong[1].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[5].dataValues.manhaxe,
                maloaixe: danhsachloaixe[1].dataValues.maloaixe,
                tgkhoihanh: '2022-12-21 22:20',
                tgketthuc: '2022-12-21 07:35',
                hinhanhxe: '/img/nha-xe-van-minh.png',
                mota: '',
                diachibatdau: 8,
                diachiketthuc: 16,
                giavenhonhat: 200000
            },
            {
                matuyenduong: danhsachtuyenduong[1].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[6].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2023-01-01 11:45',
                tgketthuc: '2023-01-01 14:30',
                hinhanhxe: '/img/nha-xe-an-phu.png',
                mota: '',
                diachibatdau: 9,
                diachiketthuc: 16,
                giavenhonhat: 300000
            },
            {
                matuyenduong: danhsachtuyenduong[1].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[1].dataValues.manhaxe,
                maloaixe: danhsachloaixe[2].dataValues.maloaixe,
                tgkhoihanh: '2022-11-20 04:30',
                tgketthuc: '2022-12-20 15:30',
                hinhanhxe: '/img/nha-xe-an-phu.png',
                mota: '',
                diachibatdau: 10,
                diachiketthuc: 16,
                giavenhonhat: 300000
            },
            {
                matuyenduong: danhsachtuyenduong[0].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[3].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2022-12-20 15:30',
                tgketthuc: '2022-12-13 09:30',
                hinhanhxe: '/img/nha-xe-an-phu.png',
                mota: '',
                diachibatdau: 5,
                diachiketthuc: 4,
                giavenhonhat: 300000
            },
            {
                matuyenduong: danhsachtuyenduong[0].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[4].dataValues.manhaxe,
                maloaixe: danhsachloaixe[3].dataValues.maloaixe,
                tgkhoihanh: '2022-10-20 09:30',
                tgketthuc: '2022-10-22 15:30',
                hinhanhxe: '/img/nha-xe-an-phu.png',
                mota: '',
                diachibatdau: 7,
                diachiketthuc: 2,
                giavenhonhat: 300000
            },
            {
                matuyenduong: danhsachtuyenduong[2].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe,
                maloaixe: danhsachloaixe[1].dataValues.maloaixe,
                tgkhoihanh: '2022-11-22 14:45',
                tgketthuc: '2022-11-23 17:00',
                hinhanhxe: '/img/nha-xe-an-phu.png',
                mota: '',
                diachibatdau: 16,
                diachiketthuc: 3,
                giavenhonhat: 150000
            },
            {
                matuyenduong: danhsachtuyenduong[3].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[10].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2022-11-20 04:50',
                tgketthuc: '2022-12-20 10:10',
                hinhanhxe: '/img/nha-xe-an-phu.png',
                mota: '',
                diachibatdau: 17,
                diachiketthuc: 2,
                giavenhonhat: 150000
            },
            {
                matuyenduong: danhsachtuyenduong[3].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[13].dataValues.manhaxe,
                maloaixe: danhsachloaixe[2].dataValues.maloaixe,
                tgkhoihanh: '2022-12-11 07:30',
                tgketthuc: '2022-12-11 09:30',
                hinhanhxe: '/img/nha-xe-an-phu.png',
                mota: '',
                diachibatdau: 1,
                diachiketthuc: 17,
                giavenhonhat: 300000
            },
        ]

        for (const data of chuyenxedata) {
            await chuyenxe.create(data)
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('chuyenxe', null, {});
    }
};