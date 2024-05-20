const { Sequelize } = require("sequelize");
const User = require("./User");
const Product = require("./Product");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

User.initModel(sequelize);
Product.initModel(sequelize);

module.exports = { sequelize, User, Product };
