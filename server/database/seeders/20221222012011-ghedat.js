'use strict';

const chuyenxe = require('../models').chuyenxe
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const danhsachchuyenxe = await chuyenxe.findAll({
      attributes: ['machuyenxe'],
      order: [
          ['createdAt', 'ASC'],
      ]
    })

    const ghedatdata = [
      {
        machuyenxe : danhsachchuyenxe[0].dataValues.machuyenxe,
        maghe : '1A',
        maloaixe : 'LIMOU9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machuyenxe : danhsachchuyenxe[0].dataValues.machuyenxe,
        maghe : '2A',
        maloaixe : 'LIMOU9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machuyenxe : danhsachchuyenxe[0].dataValues.machuyenxe,
        maghe : '3A',
        maloaixe : 'LIMOU9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machuyenxe : danhsachchuyenxe[1].dataValues.machuyenxe,
        maghe : '12A',
        maloaixe : 'TOYOTA7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machuyenxe : danhsachchuyenxe[4].dataValues.machuyenxe,
        maghe : '20A',
        maloaixe : 'LIMOU7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machuyenxe : danhsachchuyenxe[4].dataValues.machuyenxe,
        maghe : '21A',
        maloaixe : 'LIMOU7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machuyenxe : danhsachchuyenxe[4].dataValues.machuyenxe,
        maghe : '23A',
        maloaixe : 'LIMOU9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machuyenxe : danhsachchuyenxe[0].dataValues.machuyenxe,
        maghe : '5A',
        maloaixe : 'LIMOU9',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        machuyenxe : danhsachchuyenxe[3].dataValues.machuyenxe,
        maghe : '6A',
        maloaixe : 'TOYOTA7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    await queryInterface.bulkInsert('ghedat',
      ghedatdata, {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ghedat', null, {});
  }
};
