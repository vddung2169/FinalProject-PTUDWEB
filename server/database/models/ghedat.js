'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ghedat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        ghedat.belongsTo(models.chuyenxe,{
          foreignKey: 'machuyenxe'
        })
        ghedat.belongsTo(models.ghexe,{
          foreignKey:'maghe'
        })
        ghedat.belongsTo(models.loaixe,{
          foreignKey: 'maloaixe'
        })
    }
  }
  ghedat.init({
    machuyenxe: {
      primaryKey: true,
      type : DataTypes.UUID
    },
    maghe: {
      primaryKey : true,
      type: DataTypes.STRING
    },
    maloaixe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ghedat',
    freezeTableName : true
  });
  return ghedat;
};