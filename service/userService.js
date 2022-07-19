var userDao = require("../data/userDao");
require("dotenv").config();
var jwt = require("jsonwebtoken");

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

  var token = jwt.sign(user, process.env.ACCESS_TOKEN, {
    expiresIn: "1h",
  });
  return "Bearer " + token;
}

module.exports = { addUser, findAllUsers, findUserByUserName, loginManager };
