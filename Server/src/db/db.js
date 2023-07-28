const {Sequelize, DataTypes} = require("sequelize");
const Users = require("./models/users");

require("dotenv").config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;


const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`,
  {logging: true}
);