'use strict';
const tuyenduong = require('../models').tuyenduong
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const tuyenduongdata = [{
                matruyenduong: 1, //nếu để trống tự động gán số tăng dần theo insert       
                tinhbatdau: '01',
                tinhketthuc: '02',
            },
            {
                tinhbatdau: '01',
                tinhketthuc: '03',
            },
            {
                tinhbatdau: '01',
                tinhketthuc: '04',
            },
            {
                tinhbatdau: '01',
                tinhketthuc: '05',
            },
            {
                tinhbatdau: '02',
                tinhketthuc: '03',
            },
            {
                tinhbatdau: '02',
                tinhketthuc: '04',
            },
            {
                tinhbatdau: '02',
                tinhketthuc: '07',
            },
            {
                tinhbatdau: '01',
                tinhketthuc: '09',
            },
            {
                tinhbatdau: '01',
                tinhketthuc: '11',
            },
            {
                tinhbatdau: '03',
                tinhketthuc: '06',
            },
        ]
        for (const data of tuyenduongdata) {
            await tuyenduong.create(data)
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('tuyenduong', null, {});
    }
};