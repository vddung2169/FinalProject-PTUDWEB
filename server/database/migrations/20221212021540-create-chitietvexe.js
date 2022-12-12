'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Chitietvexe', {
      mave: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      maghe: {
        type: Sequelize.STRING,
        references:{
          model: 'Ghexe',
          key:'maghe'
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
    await queryInterface.dropTable('Chitietvexe');
  }
};