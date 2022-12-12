'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Danhgia', {
      madanhgia: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      makhachhang: {
        type: Sequelize.UUID,
        references:{
          model: 'Khachhang',
          key: 'makhachhang'
        }
      },
      manhaxe: {
        type: Sequelize.UUID,
        references: {
          model: 'Nhaxe',
          key: 'manhaxe'
        }
      },
      binhluan: {
        type: Sequelize.STRING
      },
      diemso: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('Danhgia');
  }
};