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
      Chuyenxe.belongsTo(models.tuyenduong,{
        foreignKey:'matuyenduong'
      })
      Chuyenxe.belongsTo(models.nhaxe,{
        foreignKey: 'manhaxe'
      })
      Chuyenxe.belongsTo(models.loaixe,{
        foreignKey: 'maloaixe'
      })
      Chuyenxe.hasMany(models.vexe,{
        foreignKey: 'machuyenxe'
      })


    }
  }
  Chuyenxe.init({
    machuyenxe: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    matuyenduong: DataTypes.INTEGER,
    manhaxe: DataTypes.UUID,
    tgkhoihanh: DataTypes.DATE,
    tgketthuc: DataTypes.DATE,
    hinhanhxe: DataTypes.STRING,
    mota: DataTypes.STRING,
    maloaixe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'chuyenxe',
    freezeTableName: true
  });
  return Chuyenxe;
};