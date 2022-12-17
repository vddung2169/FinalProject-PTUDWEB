'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loaixe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Loaixe.hasMany(models.ghexe,{
        foreignKey : 'maloaixe'
      })
      Loaixe.hasMany(models.chuyenxe,{
        foreignKey: 'maloaixe'
      })
    }
  }
  Loaixe.init({
    maloaixe: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    tenloaixe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'loaixe',
    freezeTableName: true
  });
  return Loaixe;
};