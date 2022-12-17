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
      Danhgia.belongsTo(models.khachhang,{
        foreignKey: 'makhachhang'
      })
      Danhgia.belongsTo(models.nhaxe,{
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
    modelName: 'danhgia',
    freezeTableName:true
  });
  return Danhgia;
};