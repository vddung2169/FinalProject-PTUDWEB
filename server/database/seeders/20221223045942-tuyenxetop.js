'use strict';
const tuyenduong = require('../models').tuyenduong
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        const danhsachtuyenduong = await tuyenduong.findAll({
            attributes: ['matuyenduong'],
            order: [
              ['createdAt', 'ASC'],
          ]
        })


        const tuyenduongTopdata = [
          {
            matuyenduong: danhsachtuyenduong[4].dataValues.matuyenduong,
            ten: 'Sài Gòn - Đà Lạt',
            giachitu: 180000,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            matuyenduong: danhsachtuyenduong[3].dataValues.matuyenduong,
            ten: 'Sài Gòn - Vũng Tàu',
            giachitu: 150000,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            matuyenduong: danhsachtuyenduong[2].dataValues.matuyenduong,
            ten: 'Nghệ An - Sài Gòn',
            giachitu: 200000,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            matuyenduong: danhsachtuyenduong[1].dataValues.matuyenduong,
            ten: 'Hà Nội - Nghệ An',
            giachitu: 200000,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            matuyenduong: danhsachtuyenduong[0].dataValues.matuyenduong,
            ten: 'Sài Gòn - Hà Nội',
            giachitu: 150000,
            createdAt: new Date(),
            updatedAt: new Date()
          },
      ]
      await queryInterface.bulkInsert('tuyenduongtop',
          tuyenduongTopdata, {}
      )

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tuyenduongtop', null, {});
  }
};
