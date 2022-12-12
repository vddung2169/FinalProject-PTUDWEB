'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chuyenxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Chuyenxe.belongsTo(models.Tuyenduong,{
        foreignKey:'matuyenduong'
      })
      Chuyenxe.belongsTo(models.Nhaxe,{
        foreignKey: 'manhaxe'
      })
      Chuyenxe.belongsTo(models.Loaixe,{
        foreignKey: 'maloaixe'
      })


    }
  }
  Chuyenxe.init({
    matuyenduong: DataTypes.INTEGER,
    manhaxe: DataTypes.UUID,
    tgkhoihanh: DataTypes.DATE,
    tgketthuc: DataTypes.DATE,
    hinhanhxe: DataTypes.STRING,
    mota: DataTypes.STRING,
    maloaixe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chuyenxe',
    freezeTableName: true
  });
  return Chuyenxe;
};