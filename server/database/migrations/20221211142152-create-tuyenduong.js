'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tuyenduong', {
      matuyenduong: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tinhbatdau: {
        type: Sequelize.STRING,
        references : {
          model : 'Tinhthanh',
          key: 'matinh'
        }
      },
      tinhketthuc: {
        type: Sequelize.STRING,
        references : {
          model : 'Tinhthanh',
          key: 'matinh'
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
    await queryInterface.dropTable('Tuyenduong');
  }
};