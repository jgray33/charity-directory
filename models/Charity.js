const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Charity extends Model {}

Charity.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telephoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  facebook: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  opening_hours: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored
});

module.exports = Charity
