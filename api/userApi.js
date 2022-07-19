var express = require("express");
var router = express.Router();
require("dotenv").config();

var userService = require("../service/userService");
var responses = require("../core/util/response");
var authentication = require("../core/auth/authentication");
// var authorization = (request, response, next) => {
//   if (!request.header("authorization")) {
//     return response.status(401).send({ message: "token yok" });
//   }

//   let token = request.header("authorization").split(" ")[1];

//   try {
//     var payload = jwt.verify(token, process.env.ACCESS_TOKEN);
//   } catch (error) {
//     console.log("Incorrect token");
//   }

//   console.log(payload);
//   if (!payload) {
//     return response.status(401).send({ message: "Not authorized" });
//   }
//   next();
// };
//refactor
router.post("/signUp", async (request, response) => {
  try {
    let user = request.body;
    await userService.addUser(user);
    response.send(user);
    response.status(200);
    response.end();
  } catch (error) {
    responses.errorDataRes("User cannot be added");
  }
});

router.get(
  "/findAllUsers",
  authentication.verifyToken,
  async (request, response) => {
    try {
      const users = await userService.findAllUsers();
      response.send(users);
      response.status(200);
      response.end();
    } catch (error) {
      response.status(400);
      response.end();
    }
  }
);

router.post("/login", async (request, response) => {
  try {
    let user = request.body;
    const token = await userService.loginManager(user);

    response.status(200).header({ authorization: token }).end();
  } catch (error) {
    response.status(400).end();
  }
});

var router = { router };
module.exports = router;
