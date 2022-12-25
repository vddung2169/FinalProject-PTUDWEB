'use strict';
const nhaxe = require('../models').nhaxe
const khachhang = require('../models').khachhang
const danhgia = require('../models').danhgia
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const danhsachkhachhang = await khachhang.findAll({
            attributes: ['makhachhang'],
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



        const danhgiadata = [{
                binhluan: 'Tuyệt vời',
                diemso: 5,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe
            },
            {
                binhluan: 'Xe sạch sẽ, tài xế lái cẩn thận',
                diemso: 5,
                makhachhang: danhsachkhachhang[1].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[1].dataValues.manhaxe
            },
            {
                binhluan: 'Xe đi an toàn, chỉ hơi chậm so với dự kiến',
                diemso: 4,
                makhachhang: danhsachkhachhang[2].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[4].dataValues.manhaxe
            },
            {
                binhluan: 'Xe mát, đi êm',
                diemso: 5,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[2].dataValues.manhaxe
            },
            {
                binhluan: 'Xe rộng rãi, thoải mái, nhân viên thân thiện',
                diemso: 5,
                makhachhang: danhsachkhachhang[3].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe
            },
            {
                binhluan: 'Nhân viên nhiệt tình, nội thất xe đầy đủ',
                diemso: 5,
                makhachhang: danhsachkhachhang[1].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[5].dataValues.manhaxe
            },
            {
                binhluan: 'Tuyệt vời',
                diemso: 5,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[3].dataValues.manhaxe
            },
            {
                binhluan: 'Xe đi an toàn, chỉ hơi chậm so với dự kiến',
                diemso: 5,
                makhachhang: danhsachkhachhang[4].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[4].dataValues.manhaxe
            },
            {
                binhluan: 'Tuyệt vời',
                diemso: 5,
                makhachhang: danhsachkhachhang[1].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe
            },
            {
                binhluan: 'Xe đi an toàn',
                diemso: 5,
                makhachhang: danhsachkhachhang[2].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[5].dataValues.manhaxe
            },
            {
                binhluan: 'Nhân viên nhiệt tình',
                diemso: 5,
                makhachhang: danhsachkhachhang[3].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[2].dataValues.manhaxe
            },
            {
                binhluan: 'Xe rộng rãi, thoải mái, nhân viên thân thiện',
                diemso: 4,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[3].dataValues.manhaxe
            },
            {
                binhluan: 'Xe hơi ồn',
                diemso: 3,
                makhachhang: danhsachkhachhang[4].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe
            },
            {
                binhluan: 'Xe đi đường cua hơi mệt',
                diemso: 3,
                makhachhang: danhsachkhachhang[2].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[10].dataValues.manhaxe
            },
            {
                binhluan: 'Xe gọn gàng sạch sẽ',
                diemso: 5,
                makhachhang: danhsachkhachhang[1].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[3].dataValues.manhaxe
            },
            {
                binhluan: 'Cũng tạm ổn, giá rẻ, xe thoáng',
                diemso: 4,
                makhachhang: danhsachkhachhang[4].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[5].dataValues.manhaxe
            },
            {
                binhluan: 'Tuyệt vời, mọi người đi chuyến SG-ĐL nên book ạ',
                diemso: 5,
                makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[0].dataValues.manhaxe
            },
            {
                binhluan: 'Xe rộng rãi, thoải mái, nhân viên thân thiện',
                diemso: 5,
                makhachhang: danhsachkhachhang[2].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[13].dataValues.manhaxe
            },
            {
                binhluan: 'Xe mát lắm ạ',
                diemso: 4,
                makhachhang: danhsachkhachhang[3].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[10].dataValues.manhaxe
            },
            {
                binhluan: 'Xe lúc đầu hơi ồn, sau đó thì ko có gì chê ạ',
                diemso: 4,
                makhachhang: danhsachkhachhang[1].dataValues.makhachhang,
                manhaxe: danhsachnhaxe[1].dataValues.manhaxe
            },

        ]

        for (const data of danhgiadata) {
            await danhgia.create(data)
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('danhgia', null, {});
    }
};