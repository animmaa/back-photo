const userRouter = require('express').Router();

const userController = require('../controller/user-controller');
const checkJwt = require('../middleware/checkJWT');
const checkAdmin = require('../middleware/checkAdmin');

userRouter.get('/', checkAdmin, userController.getAllUsers);
userRouter.post('/logout', userController.createUser)
userRouter.post('/login', userController.login);

module.exports = userRouter;
