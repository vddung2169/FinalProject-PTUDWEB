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
      Ghexe.belongsTo(models.loaixe,{
        foreignKey : 'maloaixe'
      })
      Ghexe.belongsTo(models.loaighe,{
        foreignKey : 'maloaighe'
      })
      Ghexe.belongsToMany(models.vexe,{
        through: "chitietvexe",
        uniqueKey: 'maghe'
      })
    }
  }
  Ghexe.init({
    maghe: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    maloaixe: DataTypes.STRING,
    maloaighe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ghexe',
    freezeTableName : true
  });
  return Ghexe;
};