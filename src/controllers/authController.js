const response = require("../network/response");
const userService = require("../services/userService");

const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const user = await userService.find(req.body.user);
    if (user && (await user.validatePassword(req.body.password))) {
      const token = jwt.sign(
        { sub: user.id, iat: Date.now() },
        process.env.JWT_SECRET
      );
      return response.success(req, res, { token }, 200);
    } else {
      return response.error(req, res, "Invalid credentials", 404);
    }
  } catch (err) {
    console.log(err);
    return response.error(req, res);
  }
}

async function register(req, res) {
  try {
    await userService.create(req.body);
    return response.success(req, res, "User registered", 201);
  } catch (err) {
    console.log(err);
    return response.error(req, res, "Cannot create user", 500);
  }
}

module.exports = { login, register };
