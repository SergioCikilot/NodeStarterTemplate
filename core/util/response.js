const { response } = require("express");

const successDataRes = (data) => {
  response.send(data);
  response.status(200);
  response.end();
};

const errorDataRes = (errorMessage) => {
  response.send({ message: errorMessage });
  response.status(400);
  response.end();
};

module.exports = { successDataRes, errorDataRes };
