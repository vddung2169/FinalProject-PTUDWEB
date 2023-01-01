'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const tinhthanhdata = [{
                matinh: '01',
                tentinh: 'Hà Nội',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '02',
                tentinh: 'TP Hồ Chí Minh',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '52',
                tentinh: 'Bà Rịa – VT',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '29',
                tentinh: 'Nghệ An',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '42',
                tentinh: 'Đà Lạt',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '50',
                tentinh: 'Đồng Tháp',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]

        // không đụng vào phần này
        await queryInterface.bulkInsert('tinhthanh',
            tinhthanhdata, {}
        )
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('tinhthanh', null, {});
    }
};