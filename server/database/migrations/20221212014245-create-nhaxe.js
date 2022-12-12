'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nhaxe', {
      manhaxe: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      tennhaxe: {
        type: Sequelize.STRING
      },
      hinhanh: {
        type: Sequelize.STRING
      },
      sodienthoai: {
        type: Sequelize.STRING
      },
      maquantri: {
        type: Sequelize.INTEGER,
        references:{
          model: 'Quantri',
          key: 'maquantri'
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
    await queryInterface.dropTable('Nhaxe');
  }
};