'use strict';
const nhaxe = require('../models').nhaxe
const tuyenduong = require('../models').tuyenduong
const loaixe = require('../models').loaixe
const chuyenxe = require('../models').chuyenxe
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const danhsachtuyenduong = await tuyenduong.findAll({
      attributes: ['matuyenduong']
    })
    const danhsachnhaxe = await nhaxe.findAll({
      attributes: ['manhaxe']
    })
    const danhsachloaixe = await loaixe.findAll({
      attributes: ['maloaixe']
    })
    
    

    const chuyenxedata = [
      {
        matuyenduong: danhsachtuyenduong[0].dataValues.matuyenduong,
        manhaxe : danhsachnhaxe[0].dataValues.manhaxe,
        maloaixe: danhsachloaixe[0].dataValues.maloaixe,
        tgkhoihanh: '2001-09-28 03:00',
        tgketthuc : '2001-09-28 05:00',
        hinhanhxe : '/img...',
        mota : '',
      }
    ]
    
    for (const data of chuyenxedata) {
        await chuyenxe.create(data)
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('chuyenxe', null, {});
  }
};
