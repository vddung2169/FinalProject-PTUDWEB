'use strict';
const khachhang = require('../models').khachhang
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const khachhangdata = [
      {
        tenkhachhang: 'Hiện',
        matkhau: '123',
        email: 'hien@gmail.com',
        sodienthoai: '012345'
      }
    ]
    
    for (const data of khachhangdata) {
        await khachhang.create(data)
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('khachhang', null, {});
  }
};
