'use strict';
const nhaxe = require('../models').nhaxe
const quantri = require('../models').quantri
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const danhsachquantri = await quantri.findAll({
      attributes: ['maquantri']
    })
    
    console.log(danhsachquantri)

    const nhaxedata = [
      {
        tennhaxe: 'Thành Bưởi',
        hinhanh: '/img/hinhanh.png',
        sodienthoai: '123456',
        maquantri: danhsachquantri[0].dataValues.maquantri
      }
    ]
    
    for (const data of nhaxedata) {
        await nhaxe.create(data)
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('nhaxe', null, {});
  }
};
