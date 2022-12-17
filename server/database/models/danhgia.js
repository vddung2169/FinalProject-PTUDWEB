'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Danhgia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Danhgia.belongsTo(models.Khachhang,{
        foreignKey: 'makhachhang'
      })
      Danhgia.belongsTo(models.Nhaxe,{
        foreignKey: 'manhaxe'
      })
    }
  }
  Danhgia.init({
    madanhgia: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 
    },
    makhachhang: DataTypes.UUID,
    manhaxe: DataTypes.UUID,
    binhluan: DataTypes.STRING,
    diemso: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Danhgia',
    freezeTableName:true
  });
  return Danhgia;
};