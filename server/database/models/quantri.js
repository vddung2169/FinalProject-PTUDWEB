'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quantri extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Quantri.hasMany(models.nhaxe,{
        foreignKey: 'maquantri'
      })
    }
  }
  Quantri.init({
    maquantri: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 
    },
    tenquantri: DataTypes.STRING,
    matkhau: DataTypes.STRING,
    email: DataTypes.STRING,
    sodienthoai: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'quantri',
    freezeTableName:true
  });
  return Quantri;
};