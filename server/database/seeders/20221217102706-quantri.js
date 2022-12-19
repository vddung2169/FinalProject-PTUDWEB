'use strict';
const quantri = require('../models').quantri
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const quantridata = [{
            tenquantri: 'Hiện',
            matkhau: '123',
            email: 'hien@gmail.com',
            sodienthoai: '012345'
        }]

        for (const data of quantridata) {
            await quantri.create(data)
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('quantri', null, {});
    }
};