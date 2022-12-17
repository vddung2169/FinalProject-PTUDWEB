'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nhaxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nhaxe.belongsTo(models.Quantri,{
        foreignKey: 'maquantri'
      })
      Nhaxe.hasMany(models.Chuyenxe,{
        foreignKey: 'manhaxe'
      })
    }
  }
  Nhaxe.init({
    manhaxe: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 
    },
    tennhaxe: DataTypes.STRING,
    hinhanh: DataTypes.STRING,
    sodienthoai: DataTypes.STRING,
    maquantri: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Nhaxe',
    freezeTableName:true
  });
  return Nhaxe;
};