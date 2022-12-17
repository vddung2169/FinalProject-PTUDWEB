'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const ghexedata = [
      {
        maghe: '2A',
        maloaixe: 'LIMOU9',
        maloaighe: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('ghexe',
      ghexedata,
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ghexe', null, {});
  }
};
