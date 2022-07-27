var express = require("express");
var bodyParser = require("body-parser");

var userApi = require("./api/userApi");
var corsConfig = require("./config/corsConfig");

var app = express();

const CONNECTION_STRING = ".....";
const PORT = 8080;

app.use(corsConfig.corsConfig);
app.use(bodyParser.json());

// app.use(authenticator.authorization);

// mongoose.connect(CONNECTION_STRING, (error) => {
//   if (!error) {
//     console.log("Connected to db");
//   }
// });

app.use("/user", userApi.router);
app.listen(PORT);
