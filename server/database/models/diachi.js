'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diachi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Diachi.belongsTo(models.tinhthanh,{
          foreignKey : 'matinh'
        })
    }
  }
  Diachi.init({
    madiachi: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    tendiachi: DataTypes.STRING,
    diachicuthe: DataTypes.STRING,
    matinh: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'diachi',
    freezeTableName: true
  });
  return Diachi;
};