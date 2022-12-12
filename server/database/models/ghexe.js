'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ghexe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ghexe.belongsTo(models.Loaixe,{
        foreignKey : 'maloaixe'
      })
      Ghexe.belongsTo(models.Loaighe,{
        foreignKey : 'loaighe'
      })
    }
  }
  Ghexe.init({
    maloaixe: DataTypes.STRING,
    loaighe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ghexe',
    freezeTableName : true
  });
  return Ghexe;
};