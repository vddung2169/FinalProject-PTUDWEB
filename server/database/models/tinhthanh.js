'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tinhthanh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Tinhthanh.hasMany(models.diachi,{
          foreignKey : 'matinh'
        })
        Tinhthanh.hasMany(models.tuyenduong,{
          as: 'TBD',
          foreignKey : 'tinhbatdau'
        })
        Tinhthanh.hasMany(models.tuyenduong,{
          as: 'TKT',
          foreignKey : 'tinhketthuc'
        })

    }
  }
  Tinhthanh.init({
    matinh: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    tentinh: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tinhthanh',
    freezeTableName: true
  });
  return Tinhthanh;
};