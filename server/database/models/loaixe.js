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
      Loaixe.hasMany(models.Ghexe,{
        foreignKey : 'maloaixe'
      })
      Loaixe.hasMany(models.Chuyenxe)
    }
  }
  Loaixe.init({
    tenloaixe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Loaixe',
    freezeTableName: true
  });
  return Loaixe;
};