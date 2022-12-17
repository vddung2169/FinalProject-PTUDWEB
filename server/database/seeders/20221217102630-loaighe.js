'use strict';
const loaighe = require('../models').loaighe
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const loaighedata = [
      {
        maloaighe: 1,
        tenloaighe: 'Phòng nằm 2 khách',
        giaghe: 650000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    for (const data of loaighedata) {
      await loaighe.create(data)
    }
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('loaighe', null, {});
  }
};
