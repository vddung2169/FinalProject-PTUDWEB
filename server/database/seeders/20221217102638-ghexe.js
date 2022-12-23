'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const ghexedata = [{
                maghe: '1A',
                maloaixe: 'LIMOU9',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '2A',
                maloaixe: 'LIMOU9',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '3A',
                maloaixe: 'LIMOU9',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '4A',
                maloaixe: 'LIMOU9',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '5A',
                maloaixe: 'LIMOU9',
                maloaighe: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '6A',
                maloaixe: 'LIMOU9',
                maloaighe: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '7A',
                maloaixe: 'LIMOU9',
                maloaighe: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '8A',
                maloaixe: 'LIMOU9',
                maloaighe: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '9A',
                maloaixe: 'LIMOU9',
                maloaighe: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '10A',
                maloaixe: 'TOYOTA7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '11A',
                maloaixe: 'TOYOTA7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '12A',
                maloaixe: 'TOYOTA7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '13A',
                maloaixe: 'TOYOTA7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '14A',
                maloaixe: 'TOYOTA7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '15A',
                maloaixe: 'TOYOTA7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '16A',
                maloaixe: 'TOYOTA7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '17A',
                maloaixe: 'LIMOU7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '18A',
                maloaixe: 'LIMOU7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '19A',
                maloaixe: 'LIMOU7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '20A',
                maloaixe: 'LIMOU7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '21A',
                maloaixe: 'LIMOU7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '22A',
                maloaixe: 'LIMOU7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '23A',
                maloaixe: 'LIMOU7',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '24A',
                maloaixe: 'LIMOU4',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '25A',
                maloaixe: 'LIMOU4',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '26A',
                maloaixe: 'LIMOU4',
                maloaighe: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maghe: '27A',
                maloaixe: 'LIMOU4',
                maloaighe: 4,
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