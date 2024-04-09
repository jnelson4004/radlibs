const {Model, DataTypes} = require("sequelize");
const sequelize = require('../config/connection');


class Radlibs extends Model {}

// create fields/columns for Traveller model
Radlibs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_input: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'radlibs'
  }
);

module.exports = Radlibs;