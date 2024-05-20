const { User } = require("../models");
const { Op } = require("sequelize");

async function find(userIdentifier) {
  try {
    const user = await User.findOne({
      where: {
        [Op.or]: [{ username: userIdentifier }, { email: userIdentifier }],
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (err) {
    console.log(err);
  }
}

async function create(data) {
  try {
    const newUser = await User.create({
      firstname: data.firstname,
      lastname: data.lastname,
      username: data.username,
      email: data.email,
      password: data.password,
    });
    return newUser;
  } catch (err) {
    throw new Error("Cannot create user");
  }
}

module.exports = { find, create };
