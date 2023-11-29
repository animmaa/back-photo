const jwt = require('jsonwebtoken');

const generateJwt = (email) => jwt.sign({ email }, process.env.SECRETE_KEY);

module.exports = {
  generateJwt,
};
