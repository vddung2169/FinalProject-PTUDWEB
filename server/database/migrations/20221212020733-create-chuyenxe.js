'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Chuyenxe', {
      machuyenxe: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      matuyenduong: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Tuyenduong',
          key: 'matuyenduong'
        }
      },
      manhaxe: {
        type: Sequelize.UUID,
        references:{
          model: 'Nhaxe',
          key: 'manhaxe'
        }
      },
      tgkhoihanh: {
        type: Sequelize.DATE
      },
      tgketthuc: {
        type: Sequelize.DATE
      },
      hinhanhxe: {
        type: Sequelize.STRING
      },
      mota: {
        type: Sequelize.STRING
      },
      maloaixe: {
        type: Sequelize.STRING,
        references:{
          model:'Loaixe',
          key:'maloaixe'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Chuyenxe');
  }
};