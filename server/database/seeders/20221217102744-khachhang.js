'use strict';
const khachhang = require('../models').khachhang
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const khachhangdata = [{
                tenkhachhang: 'Hiện',
                matkhau: '123',
                email: 'hien@gmail.com',
                sodienthoai: '0389374912'
            },
            {
                tenkhachhang: 'Đức Dũng',
                matkhau: '123456',
                email: 'vddung@gmail.com',
                sodienthoai: '0399208036'
            },
            {
                tenkhachhang: 'Niên',
                matkhau: 'nienxxx',
                email: 'nienngunguoi@gmail.com',
                sodienthoai: '0777893484'
            },
            {
                tenkhachhang: 'Quỳnh',
                matkhau: 'quynhabc',
                email: 'quynhxi@gmail.com',
                sodienthoai: '0984839284'
            },
            {
                tenkhachhang: 'Lê Minh Nhật',
                matkhau: 'lmn123345',
                email: 'lmnhat19138@gmail.com',
                sodienthoai: '0823984344'
            }
        ]

        for (const data of khachhangdata) {
            await khachhang.create(data)
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('khachhang', null, {});
    }
};