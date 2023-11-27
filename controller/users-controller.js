const Joy = require('joi');
const argon2 = require('argon2');
const userModel = require('../models/users-model');

const userSchema = Joy.object({
  email: Joy.string().min(3).required().email(),
  firstname: Joy.string().min(2).max(100).required(),
  lastname: Joy.string().min(2).max(100).required(),
  password: Joy.string().required(),
  phone: Joy.number(),
  address: Joy.string().min(2).max(255).required(),
  country: Joy.string().min(2).max(255).required(),
  city: Joy.string().min(2).max(255).required(),
  postalcode: Joy.number().required(),
  role: Joy.string().min(2).max(50).required(),
});

const usersController = {
  getAllUsers: async (req, res) => {
    const [users] = await userModel.findAllUsers();
    try {
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = usersController;
