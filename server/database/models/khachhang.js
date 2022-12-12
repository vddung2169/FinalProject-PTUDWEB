'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Khachhang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Khachhang.init({
    tenkhachhang: DataTypes.STRING,
    matkhau: DataTypes.STRING,
    email: DataTypes.STRING,
    sodienthoai: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Khachhang',
    freezeTableName: true
  });
  return Khachhang;
};