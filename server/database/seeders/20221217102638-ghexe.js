'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const ghexedata = [{
                maghe: '2A',
                maloaixe: 'LIMOU9',
                maloaighe: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '2B',
                maloaixe: 'LIMOU9',
                maloaighe: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '2C',
                maloaixe: 'LIMOU9',
                maloaighe: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '3A',
                maloaixe: 'LIMOU9',
                maloaighe: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '3B',
                maloaixe: 'LIMOU9',
                maloaighe: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '3C',
                maloaixe: 'LIMOU9',
                maloaighe: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '4A',
                maloaixe: 'LIMOU16',
                maloaighe: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '4B',
                maloaixe: 'LIMOU16',
                maloaighe: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '4C',
                maloaixe: 'LIMOU16',
                maloaighe: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '4D',
                maloaixe: 'LIMOU16',
                maloaighe: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '7A',
                maloaixe: 'LIMOU16',
                maloaighe: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]

        await queryInterface.bulkInsert('ghexe',
            ghexedata, {}
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('ghexe', null, {});
    }
};