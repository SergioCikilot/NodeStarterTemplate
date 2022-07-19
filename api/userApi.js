var express = require("express");
var router = express.Router();
require("dotenv").config();

var userService = require("../service/userService");
var responses = require("../core/util/resultResponse");
var authentication = require("../core/auth/authentication");

// function successDataResponse(data, response, status) {
//   response.send(data).status(status).end();
// }

// function errorResponse(response, status) {
//   response.status(status).end();
// }

//refactor
router.post("/signUp", async (request, response) => {
  try {
    let user = request.body;
    await userService.addUser(user);
    responses.successDataResponse(user, response, 200);
  } catch (error) {
    responses.errorDataResponse("User cannot be added");
  }
});

router.get(
  "/findAllUsers",
  authentication.verifyToken,
  async (request, response) => {
    try {
      const users = await userService.findAllUsers();
      responses.successDataResponse(users, response, 200);
    } catch (error) {
      responses.errorResponse(response, 400);
    }
  }
);

router.post("/login", async (request, response) => {
  try {
    let user = request.body;
    const token = await userService.loginManager(user);

    response.status(200).header({ authorization: token }).end();
  } catch (error) {
    responses.errorResponse(response, 403);
  }
});

var router = { router };
module.exports = router;
