'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vexe', {
      mave: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      machuyenxe: {
        type: Sequelize.UUID,
        references:{
          model: 'Chuyenxe',
          key: 'machuyenxe'
        }
      },
      makhachhang: {
        type: Sequelize.UUID,
        references:{
          model:'Khachhang',
          key:'makhachhang'
        }
      },
      tinhtrang: {
        type: Sequelize.STRING
      },
      tongtien: {
        type: Sequelize.DECIMAL(12,2)
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
    await queryInterface.dropTable('Vexe');
  }
};