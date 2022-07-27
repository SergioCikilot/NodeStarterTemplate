const bcrypt = require("bcrypt");
const saltRounds = 10;

const hash = (password) => bcrypt.hashSync(password, saltRounds);

module.exports = { hash };
