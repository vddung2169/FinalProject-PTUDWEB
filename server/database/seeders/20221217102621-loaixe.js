'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const loaixedata = [{
                maloaixe: 'LIMOU9',
                tenloaixe: 'Limousine 9 seats',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaixe: 'LIMOU16',
                tenloaixe: 'Limousine 16 seats',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaixe: 'LIMOU7',
                tenloaixe: 'Limousine 7 seats',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaixe: 'LIMOU20',
                tenloaixe: 'Limousine 20 seats',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaixe: 'TOYOTA7',
                tenloaixe: 'Toyota 7 seats',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaixe: 'TOYOTA4',
                tenloaixe: 'Toyota 4 seats',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaixe: 'TOYOTA16',
                tenloaixe: 'Toyota 16 seats',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaixe: 'MERCEDES7',
                tenloaixe: 'Mercedes 7 seats',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaixe: 'MERCEDES2',
                tenloaixe: 'Mercedes 2 seats',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaixe: 'MERCEDES4',
                tenloaixe: 'Mercedes 4 seats',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                maloaixe: 'MERCEDES12',
                tenloaixe: 'Mercedes 12 seats',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]
        await queryInterface.bulkInsert('loaixe',
            loaixedata, {}
        )

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('loaixe', null, {});
    }
};