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
                mota: '<h4>Garage Policy</h4> <ul class="policy-detail-garage-list"> <li class="policy-detail-garage-item"> <h5>Safety Covid-19</h5> <ul class="policy-detail-garage-item__content"> <li>Masks are required when boarding</li></ul> </li><li class="policy-detail-garage-item"> <h5>Requirements when boarding</h5> <ul class="policy-detail-garage-item__content"> <li>Be at the office/ticket counter/bus station 30 minutes in advance to check in</li><li>Present SMS/Email to book tickets before boarding</li><li>Do not bring food, smelly food on the car</li><li>Do not smoke, drink alcohol, use drugs in the car</li><li>Do not bring flammable objects onto the vehicle</li><li>Do not throw garbage in the car</li><li>Do not make noise or cause disorder in the car</li><li>Do not wear shoes or slippers in the car</li></ul> </li><li class="policy-detail-garage-item"> <h5>Luggage</h5> <ul class="policy-detail-garage-item__content"> <li>The total weight of the luggage must not exceed 10 kg</li><li>Do not transport bulky goods</li></ul> </li></ul>',
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
                mota: '<h4>Garage Policy</h4> <ul class="policy-detail-garage-list"> <li class="policy-detail-garage-item"> <h5>Safety Covid-19</h5> <ul class="policy-detail-garage-item__content"> <li>Masks are required when boarding</li></ul> </li><li class="policy-detail-garage-item"> <h5>Requirements when boarding</h5> <ul class="policy-detail-garage-item__content"> <li>Be at the office/ticket counter/bus station 30 minutes in advance to check in</li><li>Present SMS/Email to book tickets before boarding</li><li>Do not bring food, smelly food on the car</li><li>Do not smoke, drink alcohol, use drugs in the car</li><li>Do not bring flammable objects onto the vehicle</li><li>Do not throw garbage in the car</li><li>Do not make noise or cause disorder in the car</li><li>Do not wear shoes or slippers in the car</li></ul> </li><li class="policy-detail-garage-item"> <h5>Luggage</h5> <ul class="policy-detail-garage-item__content"> <li>The total weight of the luggage must not exceed 10 kg</li><li>Do not transport bulky goods</li></ul> </li></ul>',
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
                mota: '<h4>Garage Policy</h4> <ul class="policy-detail-garage-list"> <li class="policy-detail-garage-item"> <h5>Safety Covid-19</h5> <ul class="policy-detail-garage-item__content"> <li>Masks are required when boarding</li></ul> </li><li class="policy-detail-garage-item"> <h5>Requirements when boarding</h5> <ul class="policy-detail-garage-item__content"> <li>Be at the office/ticket counter/bus station 30 minutes in advance to check in</li><li>Present SMS/Email to book tickets before boarding</li><li>Do not bring food, smelly food on the car</li><li>Do not smoke, drink alcohol, use drugs in the car</li><li>Do not bring flammable objects onto the vehicle</li><li>Do not throw garbage in the car</li><li>Do not make noise or cause disorder in the car</li><li>Do not wear shoes or slippers in the car</li></ul> </li><li class="policy-detail-garage-item"> <h5>Luggage</h5> <ul class="policy-detail-garage-item__content"> <li>The total weight of the luggage must not exceed 10 kg</li><li>Do not transport bulky goods</li></ul> </li></ul>',
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
                mota: '<h4>Garage Policy</h4> <ul class="policy-detail-garage-list"> <li class="policy-detail-garage-item"> <h5>Safety Covid-19</h5> <ul class="policy-detail-garage-item__content"> <li>Masks are required when boarding</li></ul> </li><li class="policy-detail-garage-item"> <h5>Requirements when boarding</h5> <ul class="policy-detail-garage-item__content"> <li>Be at the office/ticket counter/bus station 30 minutes in advance to check in</li><li>Present SMS/Email to book tickets before boarding</li><li>Do not bring food, smelly food on the car</li><li>Do not smoke, drink alcohol, use drugs in the car</li><li>Do not bring flammable objects onto the vehicle</li><li>Do not throw garbage in the car</li><li>Do not make noise or cause disorder in the car</li><li>Do not wear shoes or slippers in the car</li></ul> </li><li class="policy-detail-garage-item"> <h5>Luggage</h5> <ul class="policy-detail-garage-item__content"> <li>The total weight of the luggage must not exceed 10 kg</li><li>Do not transport bulky goods</li></ul> </li></ul>',
                diachibatdau: 7,
                diachiketthuc: 16,
                giavenhonhat: 200000
            },
            {
                matuyenduong: danhsachtuyenduong[1].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[5].dataValues.manhaxe,
                maloaixe: danhsachloaixe[1].dataValues.maloaixe,
                tgkhoihanh: '2022-12-21 22:20',
                tgketthuc: '2022-12-22 07:35',
                hinhanhxe: '/img/nha-xe-van-minh.png',
                mota: '<h4>Garage Policy</h4> <ul class="policy-detail-garage-list"> <li class="policy-detail-garage-item"> <h5>Safety Covid-19</h5> <ul class="policy-detail-garage-item__content"> <li>Masks are required when boarding</li></ul> </li><li class="policy-detail-garage-item"> <h5>Requirements when boarding</h5> <ul class="policy-detail-garage-item__content"> <li>Be at the office/ticket counter/bus station 30 minutes in advance to check in</li><li>Present SMS/Email to book tickets before boarding</li><li>Do not bring food, smelly food on the car</li><li>Do not smoke, drink alcohol, use drugs in the car</li><li>Do not bring flammable objects onto the vehicle</li><li>Do not throw garbage in the car</li><li>Do not make noise or cause disorder in the car</li><li>Do not wear shoes or slippers in the car</li></ul> </li><li class="policy-detail-garage-item"> <h5>Luggage</h5> <ul class="policy-detail-garage-item__content"> <li>The total weight of the luggage must not exceed 10 kg</li><li>Do not transport bulky goods</li></ul> </li></ul>',
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
                mota: '<h4>Garage Policy</h4> <ul class="policy-detail-garage-list"> <li class="policy-detail-garage-item"> <h5>Safety Covid-19</h5> <ul class="policy-detail-garage-item__content"> <li>Masks are required when boarding</li></ul> </li><li class="policy-detail-garage-item"> <h5>Requirements when boarding</h5> <ul class="policy-detail-garage-item__content"> <li>Be at the office/ticket counter/bus station 30 minutes in advance to check in</li><li>Present SMS/Email to book tickets before boarding</li><li>Do not bring food, smelly food on the car</li><li>Do not smoke, drink alcohol, use drugs in the car</li><li>Do not bring flammable objects onto the vehicle</li><li>Do not throw garbage in the car</li><li>Do not make noise or cause disorder in the car</li><li>Do not wear shoes or slippers in the car</li></ul> </li><li class="policy-detail-garage-item"> <h5>Luggage</h5> <ul class="policy-detail-garage-item__content"> <li>The total weight of the luggage must not exceed 10 kg</li><li>Do not transport bulky goods</li></ul> </li></ul>',
                diachibatdau: 9,
                diachiketthuc: 16,
                giavenhonhat: 300000
            },
            {
                matuyenduong: danhsachtuyenduong[1].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[1].dataValues.manhaxe,
                maloaixe: danhsachloaixe[2].dataValues.maloaixe,
                tgkhoihanh: '2022-11-20 04:30',
                tgketthuc: '2022-11-20 15:30',
                hinhanhxe: '/img/nha-xe-an-phu.png',
                mota: '<h4>Garage Policy</h4> <ul class="policy-detail-garage-list"> <li class="policy-detail-garage-item"> <h5>Safety Covid-19</h5> <ul class="policy-detail-garage-item__content"> <li>Masks are required when boarding</li></ul> </li><li class="policy-detail-garage-item"> <h5>Requirements when boarding</h5> <ul class="policy-detail-garage-item__content"> <li>Be at the office/ticket counter/bus station 30 minutes in advance to check in</li><li>Present SMS/Email to book tickets before boarding</li><li>Do not bring food, smelly food on the car</li><li>Do not smoke, drink alcohol, use drugs in the car</li><li>Do not bring flammable objects onto the vehicle</li><li>Do not throw garbage in the car</li><li>Do not make noise or cause disorder in the car</li><li>Do not wear shoes or slippers in the car</li></ul> </li><li class="policy-detail-garage-item"> <h5>Luggage</h5> <ul class="policy-detail-garage-item__content"> <li>The total weight of the luggage must not exceed 10 kg</li><li>Do not transport bulky goods</li></ul> </li></ul>',
                diachibatdau: 10,
                diachiketthuc: 16,
                giavenhonhat: 300000
            },
            {
                matuyenduong: danhsachtuyenduong[0].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[3].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2022-12-11 07:30',
                tgketthuc: '2022-12-13 09:30',
                hinhanhxe: '/img/nha-xe-an-phu.png',
                mota: '<h4>Garage Policy</h4> <ul class="policy-detail-garage-list"> <li class="policy-detail-garage-item"> <h5>Safety Covid-19</h5> <ul class="policy-detail-garage-item__content"> <li>Masks are required when boarding</li></ul> </li><li class="policy-detail-garage-item"> <h5>Requirements when boarding</h5> <ul class="policy-detail-garage-item__content"> <li>Be at the office/ticket counter/bus station 30 minutes in advance to check in</li><li>Present SMS/Email to book tickets before boarding</li><li>Do not bring food, smelly food on the car</li><li>Do not smoke, drink alcohol, use drugs in the car</li><li>Do not bring flammable objects onto the vehicle</li><li>Do not throw garbage in the car</li><li>Do not make noise or cause disorder in the car</li><li>Do not wear shoes or slippers in the car</li></ul> </li><li class="policy-detail-garage-item"> <h5>Luggage</h5> <ul class="policy-detail-garage-item__content"> <li>The total weight of the luggage must not exceed 10 kg</li><li>Do not transport bulky goods</li></ul> </li></ul>',
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
                mota: '<h4>Garage Policy</h4> <ul class="policy-detail-garage-list"> <li class="policy-detail-garage-item"> <h5>Safety Covid-19</h5> <ul class="policy-detail-garage-item__content"> <li>Masks are required when boarding</li></ul> </li><li class="policy-detail-garage-item"> <h5>Requirements when boarding</h5> <ul class="policy-detail-garage-item__content"> <li>Be at the office/ticket counter/bus station 30 minutes in advance to check in</li><li>Present SMS/Email to book tickets before boarding</li><li>Do not bring food, smelly food on the car</li><li>Do not smoke, drink alcohol, use drugs in the car</li><li>Do not bring flammable objects onto the vehicle</li><li>Do not throw garbage in the car</li><li>Do not make noise or cause disorder in the car</li><li>Do not wear shoes or slippers in the car</li></ul> </li><li class="policy-detail-garage-item"> <h5>Luggage</h5> <ul class="policy-detail-garage-item__content"> <li>The total weight of the luggage must not exceed 10 kg</li><li>Do not transport bulky goods</li></ul> </li></ul>',
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
                mota: '<h4>Garage Policy</h4> <ul class="policy-detail-garage-list"> <li class="policy-detail-garage-item"> <h5>Safety Covid-19</h5> <ul class="policy-detail-garage-item__content"> <li>Masks are required when boarding</li></ul> </li><li class="policy-detail-garage-item"> <h5>Requirements when boarding</h5> <ul class="policy-detail-garage-item__content"> <li>Be at the office/ticket counter/bus station 30 minutes in advance to check in</li><li>Present SMS/Email to book tickets before boarding</li><li>Do not bring food, smelly food on the car</li><li>Do not smoke, drink alcohol, use drugs in the car</li><li>Do not bring flammable objects onto the vehicle</li><li>Do not throw garbage in the car</li><li>Do not make noise or cause disorder in the car</li><li>Do not wear shoes or slippers in the car</li></ul> </li><li class="policy-detail-garage-item"> <h5>Luggage</h5> <ul class="policy-detail-garage-item__content"> <li>The total weight of the luggage must not exceed 10 kg</li><li>Do not transport bulky goods</li></ul> </li></ul>',
                diachibatdau: 16,
                diachiketthuc: 3,
                giavenhonhat: 150000
            },
            {
                matuyenduong: danhsachtuyenduong[3].dataValues.matuyenduong,
                manhaxe: danhsachnhaxe[10].dataValues.manhaxe,
                maloaixe: danhsachloaixe[0].dataValues.maloaixe,
                tgkhoihanh: '2022-11-20 04:50',
                tgketthuc: '2022-11-20 10:10',
                hinhanhxe: '/img/nha-xe-an-phu.png',
                mota: '<h4>Garage Policy</h4> <ul class="policy-detail-garage-list"> <li class="policy-detail-garage-item"> <h5>Safety Covid-19</h5> <ul class="policy-detail-garage-item__content"> <li>Masks are required when boarding</li></ul> </li><li class="policy-detail-garage-item"> <h5>Requirements when boarding</h5> <ul class="policy-detail-garage-item__content"> <li>Be at the office/ticket counter/bus station 30 minutes in advance to check in</li><li>Present SMS/Email to book tickets before boarding</li><li>Do not bring food, smelly food on the car</li><li>Do not smoke, drink alcohol, use drugs in the car</li><li>Do not bring flammable objects onto the vehicle</li><li>Do not throw garbage in the car</li><li>Do not make noise or cause disorder in the car</li><li>Do not wear shoes or slippers in the car</li></ul> </li><li class="policy-detail-garage-item"> <h5>Luggage</h5> <ul class="policy-detail-garage-item__content"> <li>The total weight of the luggage must not exceed 10 kg</li><li>Do not transport bulky goods</li></ul> </li></ul>',
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
                mota: '<h4>Garage Policy</h4> <ul class="policy-detail-garage-list"> <li class="policy-detail-garage-item"> <h5>Safety Covid-19</h5> <ul class="policy-detail-garage-item__content"> <li>Masks are required when boarding</li></ul> </li><li class="policy-detail-garage-item"> <h5>Requirements when boarding</h5> <ul class="policy-detail-garage-item__content"> <li>Be at the office/ticket counter/bus station 30 minutes in advance to check in</li><li>Present SMS/Email to book tickets before boarding</li><li>Do not bring food, smelly food on the car</li><li>Do not smoke, drink alcohol, use drugs in the car</li><li>Do not bring flammable objects onto the vehicle</li><li>Do not throw garbage in the car</li><li>Do not make noise or cause disorder in the car</li><li>Do not wear shoes or slippers in the car</li></ul> </li><li class="policy-detail-garage-item"> <h5>Luggage</h5> <ul class="policy-detail-garage-item__content"> <li>The total weight of the luggage must not exceed 10 kg</li><li>Do not transport bulky goods</li></ul> </li></ul>',
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