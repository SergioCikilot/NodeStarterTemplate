function successDataResponse(data, response, status) {
  response.send(data).status(status).end();
}

function successHeaderResponse(data, response, status) {
  response.status(status).header(data).end();
}

function errorResponse(response, status) {
  response.status(status).end();
}

function errorDataResponse(errorMessage, response, status) {
  response.send({ message: errorMessage }).status(status).end();
}
module.exports = {
  errorDataResponse,
  successDataResponse,
  errorResponse,
  successHeaderResponse,
};
