var { response } = require("express");

function errorDataResponse(errorMessage) {
  response.send({ message: errorMessage });
  response.status(400);
  response.end();
}

function successDataResponse(data, response, status) {
  response.send(data).status(status).end();
}

function errorResponse(response, status) {
  response.status(status).end();
}

module.exports = { errorDataResponse, successDataResponse, errorResponse };
