'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loaighe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Loaighe.hasMany(models.ghexe,{
        foreignKey : 'maloaighe'
      })
    }
  }
  Loaighe.init({
    maloaighe: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tenloaighe: DataTypes.STRING,
    giaghe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'loaighe',
    freezeTableName: true
  });
  return Loaighe;
};