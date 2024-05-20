require("dotenv").config();
const { sequelize } = require("../models");

async function runAllSeeders() {
  await sequelize.sync({ alter: true });
  await require("./productSeeder")();
}

runAllSeeders();
