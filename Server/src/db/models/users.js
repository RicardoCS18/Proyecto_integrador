const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID, // sdff23-werw345-234saf
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // algoritmo que genera UUIDs
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
      },
    },
    {
      timestamps: false,
    }
  );