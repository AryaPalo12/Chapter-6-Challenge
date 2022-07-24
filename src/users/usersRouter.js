const express = require("express");
const userControllers = require("./userController");
const userRouter = express.Router();

//The router below will respond according to the method provided by the client

//This will create a new user
userRouter.post("/user", userControllers.createUserData);

//This will show user data
userRouter.get("/user", userControllers.readUserData);

//This will update user data
userRouter.put("/user", userControllers.updateUserData);

//This will delete user data
userRouter.delete("/user", userControllers.deleteUserByName);

module.exports = userRouter;
