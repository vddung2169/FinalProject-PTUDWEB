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
                matruyenduong: 2,
                tinhbatdau: '01',
                tinhketthuc: '29',
            },
            {
                matruyenduong: 3,
                tinhbatdau: '29',
                tinhketthuc: '02',
            },
            {
                matruyenduong: 4,
                tinhbatdau: '02',
                tinhketthuc: '52',
            },
            {
                matruyenduong: 5,
                tinhbatdau: '02',
                tinhketthuc: '42',
            }
        ]
        for (const data of tuyenduongdata) {
            await tuyenduong.create(data)
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('tuyenduong', null, {});
    }
};