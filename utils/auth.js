const jwt = require('jsonwebtoken');

const generateJwt = (email, role) => jwt.sign({ email, role }, process.env.SECRETE_KEY);

module.exports = {
  generateJwt,
};
