'use strict';
const ghexe = require('../models').ghexe
const vexe = require('../models').vexe
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const danhsachghexe = await ghexe.findAll({
            attributes: ['maghe']
        })
        const danhsachvexe = await vexe.findAll({
            attributes: ['mave']
        })

        const chitietvexedata = [{
            ghexeMaghe: danhsachghexe[0].dataValues.maghe,
            vexeMave: danhsachvexe[0].dataValues.mave,
            createdAt: new Date(),
            updatedAt: new Date()
        }]
        await queryInterface.bulkInsert('chitietvexe',
            chitietvexedata, {}
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('chitietvexe', null, {});
    }
};