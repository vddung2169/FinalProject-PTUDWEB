'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const loaixedata = [
      {
        maloaixe: 'LIMOU9',
        tenloaixe: 'Limousine 9 seats',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('loaixe',
      loaixedata,
      {}
    )
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('loaixe', null, {});
  }
};
