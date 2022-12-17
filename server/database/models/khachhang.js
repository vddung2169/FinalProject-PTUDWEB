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
      Khachhang.hasMany(models.danhgia,{
        foreignKey:'makhachhang'
      })
      Khachhang.hasMany(models.vexe,{
        foreignKey:'makhachhang'
      })
    }
  }
  Khachhang.init({
    makhachhang: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 
    },
    tenkhachhang: DataTypes.STRING,
    matkhau: DataTypes.STRING,
    email: DataTypes.STRING,
    sodienthoai: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'khachhang',
    freezeTableName: true
  });
  return Khachhang;
};