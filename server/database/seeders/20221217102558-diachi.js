'use strict';
const diachi = require('../models').diachi
    /** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const diachidata = [{
                madiachi: 1, //nếu để trống tự động gán số tăng dần theo insert       
                tendiachi: 'Bến xe miền Đông',
                diachicuthe: '292 Đinh Bộ Lĩnh, P. 26, Q. Bình Thạnh, Thành phố Hồ Chí Minh',
                matinh: '02',
            },
            {
                madiachi: 2,
                tendiachi: 'Bến xe miền Tây',
                diachicuthe: '292 Đinh Bộ Lĩnh, P. 26, Q. Bình Thạnh, Thành phố Hồ Chí Minh',
                matinh: '02',
            },
            {
                madiachi: 3,
                tendiachi: 'Bến xe Tô Châu',
                diachicuthe: 'Lê Hồng Phong, P.1, Quận 10, Thành phố Hồ Chí Minh',
                matinh: '02',
            },
            {
                madiachi: 4,
                tendiachi: 'Bến xe buýt Chợ Lớn',
                diachicuthe: '14 Lê Quang Sung, Phường 14, Quận 5, Thành phố Hồ Chí Minh',
                matinh: '02',
            },
            {
                madiachi: 5,
                tendiachi: 'Bến xe khách Mỹ Đình',
                diachicuthe: '20 Phạm Hùng, Mỹ Đình, Từ Liêm, Hà Nội',
                matinh: '01',
            },
            {
                madiachi: 6,
                tendiachi: 'Ga Gia Lâm',
                diachicuthe: 'Phường Ngọc Thụy, quận Long Biên, Hà Nội',
                matinh: '01',
            },
            {
                madiachi: 7,
                tendiachi: 'Bến xe Giáp Bát',
                diachicuthe: 'Km6 đường Giải phóng, quận Hoàng Mai, Hà Nội',
                matinh: '01',
            },
            {
                madiachi: 8,
                tendiachi: 'Bến xe Nước Ngầm',
                diachicuthe: 'Km8 Giải Phóng, quận Hoàng Mai, Hà Nội',
                matinh: '01',
            },
            {
                madiachi: 9,
                tendiachi: 'Bến xe Gia Lâm',
                diachicuthe: 'Số 9, đường Ngô Gia Khảm, Long Biên, Hà Nội',
                matinh: '01',
            },
            {
                madiachi: 10,
                tendiachi: 'Bến xe Yên Nghĩa',
                diachicuthe: 'Đường Trần Phú, Hà Đông, Hà Nội',
                matinh: '01',
            },
            {
                madiachi: 11,
                tendiachi: 'Ga Hà Nội',
                diachicuthe: '120 Lê Duẩn, quận Hoàn Kiếm, Hà Nội',
                matinh: '01',
            }
        ]

        //không đụng vào phần này
        for (const data of diachidata) {
            await diachi.create(data)
        }
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('diachi', null, {});
    }
};