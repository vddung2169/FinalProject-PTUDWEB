'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tuyenduong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tuyenduong.belongsTo(models.Tinhthanh,{
        foreignKey: "tinhbatdau"
      })
      Tuyenduong.belongsTo(models.Tinhthanh,{
        foreignKey: "tinhketthuc"
      })
      Tuyenduong.hasMany(models.Chuyenxe,{
        foreignKey: 'matuyenduong'
      })
    }
  }
  Tuyenduong.init({
    matuyenduong: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tinhbatdau : DataTypes.STRING,
    tinhketthuc : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tuyenduong',
    freezeTableName:true
  });
  return Tuyenduong;
};