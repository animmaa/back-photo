const userRouter = require('express').Router();

const userController = require('../controller/users-controller');

userRouter.get('/', userController.getAllUsers);
userRouter.post('/logout', userController.createUser)
userRouter.post('/login', userController.login)

module.exports = userRouter;
