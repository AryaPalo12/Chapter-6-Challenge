const userServices = require("./userService");
const md5 = require('blueimp-md5')

//This function to create new user and return error if the username is duplicate or request is not complete.
const createUserData = async (req, res) => {
  try {
    //this function need body input with key username and pasword
    const { username, password } = req.body;
    const user = {
      username: username,
      password: md5(password),
    };
    console.log(password);
    await userServices.createNewUser(user);
    res.status(200).json(user);
  } catch {
    res.status(500).send("Bad request or Username has been recorded before.");
  }
};

//This will show user data from the get method
const readUserData = async (req, res) => {
  try {
    //this function need the key user in the query to work
    const { user } = req.query;
    const userData = await userServices.readUserData(user);
    res.status(200).json(userData).send(userData, "User Deleted Successfully");
  } catch {
    res.status(400).send("Bad request.");
  }
};

//This method will delete the user
const deleteUserByName = async (req, res) => {
  try {
    //This function need the key user in the query to work
    const { user } = req.query;
    const deletedUser = await userServices.deleteUserByName(user);
    res.status(200).json(deletedUser);
  } catch {
    res.status(400).send("Bad request");
  }
};

//This function will update the user data
const updateUserData = async (req, res) => {
  try {
    //Provide username as query and username and password in the body
    //The decision to not use id as query is to reduce the chance which make
    //the user easily update other user data by Id key, making it more difficult
    //to change the wrong username and password data
    const { username, password } = req.body;
    const { user } = req.query;
    const user_data = {
      username: username,
      password: md5(password),
    };
    console.log(user, user_data);
    const updatedUser = await userServices.updateUserData(user, user_data);
    res.status(200).send(updatedUser);
  } catch {
    res.status(400).send("The data your provide is not valid");
  }
};

const userControllers = {
  readUserData,
  createUserData,
  deleteUserByName,
  updateUserData,
};

module.exports = userControllers;
