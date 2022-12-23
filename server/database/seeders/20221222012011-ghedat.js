'use strict';
const ghexe = require('../models').ghexe
const chuyenxe = require('../models').chuyenxe
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  //   const danhsachghexe = await ghexe.findAll({
  //     attributes: ['maghe']
  // })
  //   const danhsachvexe = await vexe.findAll({
  //       attributes: ['mave']
  //   })

  //   const chitietvexedata = [{
  //       ghexeMaghe: danhsachghexe[0].dataValues.maghe,
  //       vexeMave: danhsachvexe[0].dataValues.mave,
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //   }]


  //   await queryInterface.bulkInsert('ghedat',
  //     chitietvexedata, {}
  //   )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
