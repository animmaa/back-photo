const userRouter = require('express').Router();

const userController = require('../controller/users-controller');

userRouter.get('/', userController.getAllUsers);

module.exports = userRouter;
