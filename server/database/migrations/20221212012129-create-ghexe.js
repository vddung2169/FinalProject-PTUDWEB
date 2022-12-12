'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ghexe', {
      maghe: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      maloaixe: {
        type: Sequelize.STRING,
        references:{
          model: 'Loaixe',
          key: 'maloaixe'
        }
      },
      loaighe: {
        type: Sequelize.INTEGER,
        references:{
          model:'Loaighe',
          key:'maloaighe'
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
    await queryInterface.dropTable('Ghexe');
  }
};