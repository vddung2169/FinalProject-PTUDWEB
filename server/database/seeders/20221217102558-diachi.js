'use strict';
const diachi = require('../models').diachi
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const diachidata = [
      {
        madiachi: 1,        //nếu để trống tự động gán số tăng dần theo insert       
        tendiachi: 'Bến xe miền Đông',
        diachicuthe: '292 Đinh Bộ Lĩnh, P. 26, Q. Bình Thạnh, Thành phố Hồ Chí Minh',
        matinh : '02',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        madiachi: 2,
        tendiachi: 'Bến xe miền Tây',
        diachicuthe: '292 Đinh Bộ Lĩnh, P. 26, Q. Bình Thạnh, Thành phố Hồ Chí Minh',
        matinh : '02',
      },
      

    ]
    for (const data of diachidata) {
      await diachi.create(data)
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('diachi', null, {});
  }
};
