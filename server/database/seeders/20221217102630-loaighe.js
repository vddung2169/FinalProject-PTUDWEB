'use strict';
const loaighe = require('../models').loaighe
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const loaighedata = [{
                maloaighe: 1,
                tenloaighe: 'Phòng nằm 2 khách',
                giaghe: 650000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaighe: 2,
                tenloaighe: 'Phòng nằm 1 khách',
                giaghe: 300000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaighe: 3,
                tenloaighe: 'Ghế nằm 1 khách',
                giaghe: 200000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaighe: 4,
                tenloaighe: 'Ghế ngồi 1 khách',
                giaghe: 150000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]
        for (const data of loaighedata) {
            await loaighe.create(data)
        }

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('loaighe', null, {});
    }
};