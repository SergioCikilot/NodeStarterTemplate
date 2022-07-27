require("dotenv").config();

var bcryptHasher = require("../security/bcryptHasher");
var userDao = require("../data/userDao");
var authentication = require("../security/auth/authentication");

async function addUser(data) {
  let password = data.password;

  let hashedPassword = bcryptHasher.hash(password);

  data.password = hashedPassword;
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

  var token = authentication.signToken(user, "1h");

  return "Bearer " + token;
}

module.exports = { addUser, findAllUsers, findUserByUserName, loginManager };
