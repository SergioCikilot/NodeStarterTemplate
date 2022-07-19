function authenticate(req, res, next) {
  console.log("Authenticated");
  next();
}

var auth = { authenticate };
module.exports = auth;
