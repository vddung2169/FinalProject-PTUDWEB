'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vexe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vexe.belongsTo(models.Chuyenxe,{
        foreignKey:'machuyenxe'
      })
      Vexe.belongsTo(models.Khachhang,{
        foreignKey:'makhachhang'
      })
    }
  }
  Vexe.init({
    mave: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4 
    },
    machuyenxe: DataTypes.UUID,
    makhachhang: DataTypes.UUID,
    tinhtrang: DataTypes.STRING,
    tongtien: DataTypes.DECIMAL(12,2)
  }, {
    sequelize,
    modelName: 'Vexe',
    freezeTableName: true
  });
  return Vexe;
};