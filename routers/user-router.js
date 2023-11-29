const userRouter = require('express').Router();

const userController = require('../controller/user-controller');

userRouter.get('/', userController.getAllUsers);
userRouter.post('/logout', userController.createUser)
userRouter.post('/login', userController.login)

module.exports = userRouter;
