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
                matinh: '03',
                tentinh: 'Hải Phòng',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '04',
                tentinh: 'Đà Nẵng',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '05',
                tentinh: 'Hà Giang',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '06',
                tentinh: 'Cao Bằng',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '07',
                tentinh: 'Lai Châu',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '08',
                tentinh: 'Lào Cai',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '09',
                tentinh: 'Tuyên Quang',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '10',
                tentinh: 'Lạng Sơn',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '11',
                tentinh: 'Bắc Kạn',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '12',
                tentinh: 'Thái Nguyên',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '13',
                tentinh: 'Yên Bái',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '14',
                tentinh: 'Sơn La',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '15',
                tentinh: 'Phú Thọ',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '16',
                tentinh: 'Vĩnh Phúc',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '17',
                tentinh: 'Quảng Ninh',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '18',
                tentinh: 'Bắc Giang',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '19',
                tentinh: 'Bắc Ninh',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '20',
                tentinh: '',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '21',
                tentinh: 'Hải Dương',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '22',
                tentinh: 'Hưng Yên',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '23',
                tentinh: 'Hòa Bình',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '24',
                tentinh: 'Hà Nam',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '25',
                tentinh: 'Nam Định',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '26',
                tentinh: 'Thái Bình',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '27',
                tentinh: 'Ninh Bình',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '28',
                tentinh: 'Thanh Hóa',
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
                matinh: '30',
                tentinh: 'Hà Tĩnh',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '31',
                tentinh: 'Quảng Bình',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '32',
                tentinh: 'Quảng trị',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '33',
                tentinh: 'Thừa Thiên Huế',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '34',
                tentinh: 'Quảng Nam',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '35',
                tentinh: 'Quảng Ngãi',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '36',
                tentinh: 'Kontum',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '37',
                tentinh: 'Bình Định',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '38',
                tentinh: 'Gia Lai',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '39',
                tentinh: 'Phú Yên',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '40',
                tentinh: 'Đắk Lắk',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '41',
                tentinh: 'Khánh Hòa',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '42',
                tentinh: 'Lâm Đồng',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '43',
                tentinh: 'Bình Phước',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '44',
                tentinh: 'Bình Dương',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '45',
                tentinh: 'Ninh Thuận',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '46',
                tentinh: 'Tây Ninh',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '47',
                tentinh: 'Bình Thuận',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '48',
                tentinh: 'Đồng Nai',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '49',
                tentinh: 'Long An',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '50',
                tentinh: 'Đồng Tháp',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '51',
                tentinh: 'An Giang',
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
                matinh: '53',
                tentinh: 'Tiền Giang',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '54',
                tentinh: 'Kiên Giang',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '55',
                tentinh: 'Cần Thơ',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '56',
                tentinh: 'Bến Tre',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '57',
                tentinh: 'Vĩnh Long',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '58',
                tentinh: 'Trà Vinh',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '59',
                tentinh: 'Sóc Trăng',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '60',
                tentinh: 'Bạc Liêu',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '61',
                tentinh: 'Cà Mau',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '62',
                tentinh: 'Điện Biên',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '63',
                tentinh: 'Đắk Nông',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                matinh: '64',
                tentinh: 'Hậu Giang',
                createdAt: new Date(),
                updatedAt: new Date()
            }
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