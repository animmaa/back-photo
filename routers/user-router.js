const userRouter = require('express').Router();

const userController = require('../controller/user-controller');
const checkJwt = require('../middleware/checkJWT');

userRouter.get('/', checkJwt, userController.getAllUsers);
userRouter.post('/logout', userController.createUser)
userRouter.post('/login', userController.login);

module.exports = userRouter;
