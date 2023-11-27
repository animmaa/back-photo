const connection = require('../config/db_config');

const db = connection.promise();

const findAllUsers = () => db.query('SELECT * FROM user');

const findUserByEmail = (email) =>
  db.query('SELECT * FROM user WHERE email = ?', [email]);

const createUser = (
  email,
  firstname,
  lastname,
  password,
  phone,
  address,
  country,
  city,
  postalcode,
  role
) =>
  db.query(
    'INSERT INTO user (email, firstname, lastname, password, phone, address, country, city, postalcode, role) VALUES (?,?,?,?,?,?,?,?,?,?)',
    [
      email,
      firstname,
      lastname,
      password,
      phone,
      address,
      country,
      city,
      postalcode,
      role,
    ]
  );

module.exports = {
  findAllUsers,
  findUserByEmail,
  createUser,
};
