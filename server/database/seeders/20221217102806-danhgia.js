'use strict';
const nhaxe = require('../models').nhaxe
const khachhang = require('../models').khachhang
const danhgia = require('../models').danhgia
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const danhsachkhachhang = await khachhang.findAll({
      attributes: ['makhachhang']
    })
    const danhsachnhaxe = await nhaxe.findAll({
      attributes: ['manhaxe']
    })
    
    

    const danhgiadata = [
      {
        binhluan :'Tuyệt vời',
        diemso: 5,
        makhachhang: danhsachkhachhang[0].dataValues.makhachhang,
        manhaxe : danhsachnhaxe[0].dataValues.manhaxe
      }
    ]
    
    for (const data of danhgiadata) {
        await danhgia.create(data)
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('danhgia', null, {});
  }
};
