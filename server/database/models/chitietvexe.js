'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chitietvexe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Chitietvexe.belongsTo(models.Vexe,{
        foreignKey: 'mave'
      })

      Chitietvexe.belongsTo(models.Ghexe,{
        foreignKey:'maghe'
      })
    }
  }
  Chitietvexe.init({
    mave: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    maghe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chitietvexe',
    freezeTableName: true
  });
  return Chitietvexe;
};