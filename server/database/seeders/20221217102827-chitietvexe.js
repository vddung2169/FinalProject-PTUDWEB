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
            attributes: ['mave'],
            order: [
                ['createdAt', 'ASC'],
            ]
        })

        const chitietvexedata = [
            {
                ghexeMaghe: '1A',
                vexeMave: danhsachvexe[0].dataValues.mave,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                ghexeMaghe: '2A',
                vexeMave: danhsachvexe[0].dataValues.mave,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                ghexeMaghe: '3A',
                vexeMave: danhsachvexe[0].dataValues.mave,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                ghexeMaghe: '12A',
                vexeMave: danhsachvexe[1].dataValues.mave,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                ghexeMaghe: '20A',
                vexeMave: danhsachvexe[2].dataValues.mave,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                ghexeMaghe: '21A',
                vexeMave: danhsachvexe[2].dataValues.mave,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                ghexeMaghe: '23A',
                vexeMave: danhsachvexe[3].dataValues.mave,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                ghexeMaghe: '5A',
                vexeMave: danhsachvexe[4].dataValues.mave,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                ghexeMaghe: '6A',
                vexeMave: danhsachvexe[5].dataValues.mave,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]
        await queryInterface.bulkInsert('chitietvexe',
            chitietvexedata, {}
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('chitietvexe', null, {});
    }
};