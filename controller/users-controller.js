const Joy = require('joi');
const argon2 = require('argon2');
const userModel = require('../models/users-model');

const userSchema = Joy.object({
  email: Joy.string().min(3).required().email(),
  firstname: Joy.string().min(2).max(100).required(),
  lastname: Joy.string().min(2).max(100).required(),
  password: Joy.string().required(),
  phone: Joy.string().max(20),
  address: Joy.string().min(2).max(255).required(),
  country: Joy.string().min(2).max(255).required(),
  city: Joy.string().min(2).max(255).required(),
  postalcode: Joy.number().integer().required(),
  role: Joy.string().min(2).max(50).required(),
});

const userSchemaLogin = Joy.object({
  email: Joy.string().min(3).required().email(),
  password: Joy.string().required()
});

const usersController = {
  getAllUsers: async (_, res) => {
    const [users] = await userModel.findAllUsers();
    try {
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  },

  createUser: async (req, res) => {
    const { value, error } = userSchema.validate(req.body);

    if (error) {
      return res.status(400).json(error);
    }

    const [[existingUser]] = await userModel.findUserByEmail(value.email);

    if (existingUser) {
      return res.status(409).json({
        message: 'cette email est déjà utilisé',
      });
    }

    const hashPassword = await argon2.hash(value.password);

    await userModel.createUser(
      value.email,
      value.firstname,
      value.lastname,
      hashPassword,
      value.phone,
      value.address,
      value.country,
      value.city,
      value.postalcode,
      value.role
    );

    return res.json({
      message: 'le compte à bien été créé',
    });
  },

  login: async (req, res) => {
    const { value, error } = userSchemaLogin.validate(req.body);
    // console.log(value, error);

    if (error) {
      // on return l'erreur sil y en a une
      return res.status(400).json(error);
    }

    const [[existedUser]] = await userModel.findUserByEmail(value.email);

    if (!existedUser) {
      return res.status(403).json({
        message: 'pseudo ou mot de passe incorrect',
      });
    }

    const verified = await argon2.verify(existedUser.password, value.password);

    if (!verified) {
      return res.status(403).json({
        message: 'pseudo ou mot de passe incorrect',
      });
    }

    //const jwtkey = generateJwt(value.email);

    // console.log(existedUser)

    // return res.json({
    //   credential: jwtkey,
    //   id: existedUser.id,
    // });
    return res.json({
        message: "vous etes connecter"
    })
  },
};

module.exports = usersController;
