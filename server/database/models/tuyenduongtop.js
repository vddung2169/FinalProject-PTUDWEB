'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tuyenduongtop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tuyenduongtop.belongsTo(models.tuyenduong,{
        foreignKey: 'matuyenduong'
      })
    }
  }
  tuyenduongtop.init({
    matuyenduong: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    giachitu: DataTypes.DECIMAL(12, 2) 
  }, {
    sequelize,
    modelName: 'tuyenduongtop',
  });
  return tuyenduongtop;
};