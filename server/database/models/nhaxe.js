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
      Nhaxe.belongsTo(models.quantri,{
        foreignKey: 'maquantri'
      })
      Nhaxe.hasMany(models.chuyenxe,{
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
    modelName: 'nhaxe',
    freezeTableName:true
  });
  return Nhaxe;
};