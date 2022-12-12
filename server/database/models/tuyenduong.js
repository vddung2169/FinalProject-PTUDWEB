'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tuyenduong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tuyenduong.belongsTo(models.Tinhthanh)
      Tuyenduong.hasMany(models.Chuyenxe)
    }
  }
  Tuyenduong.init({
    tinhbatdau : DataTypes.STRING,
    tinhketthuc : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tuyenduong',
  });
  return Tuyenduong;
};