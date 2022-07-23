var jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyToken(request, response, next) {
  if (!request.header("authorization")) {
    return response.status(401).send({ message: "token yok" });
  }

  let token = request.header("authorization").split(" ")[1];

  try {
    var payload = jwt.verify(token, process.env.ACCESS_TOKEN);
  } catch (error) {
    console.log("Incorrect token");
  }

  console.log(payload);
  if (!payload) {
    return response.status(401).send({ message: "Not authorized" });
  }
  next();
}

function signToken(user, timeString) {
  var token = jwt.sign(user, process.env.ACCESS_TOKEN, {
    expiresIn: timeString,
  });
  return token;
}

var auth = { verifyToken, signToken };
module.exports = auth;
