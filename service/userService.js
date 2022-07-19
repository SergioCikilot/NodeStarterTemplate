require("dotenv").config();
var jwt = require("jsonwebtoken");

var userDao = require("../data/userDao");
var authentication = require("../core/auth/authentication");

async function addUser(data) {
  const message = await userDao.createUser(data);
  return message;
}

async function findAllUsers() {
  const users = await userDao.findAllUsers();
  return users;
}

async function findUserByUserName(data) {
  const user = await userDao.findUserByUserName(data);
  return user;
}

async function loginManager(data) {
  let isAuthenticated = false;
  const user = await userDao.findUserByUserName(data);

  if (!user) {
    return user;
  }

  // var token = jwt.sign(user, process.env.ACCESS_TOKEN, {
  //   expiresIn: "1h",
  // });

  var token = authentication.signToken(user, "1h");

  return "Bearer " + token;
}

module.exports = { addUser, findAllUsers, findUserByUserName, loginManager };
