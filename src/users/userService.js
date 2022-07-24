const userRepo = require("./userRepo");

//This will create new user data non duplicate username has been covered in the table model
const createNewUser = async (user) => {
  return await userRepo.createNewUser(user);
};

//This will show all user data
const readUserData = async (user) => {
  if (user == undefined) {
    return await userRepo.readAllUserData();
  } else {
    return await userRepo.readUserByName(user);
  }
};

//This will delete user by providing the username as query
const deleteUserByName = async (user) => {
  //The query must not be empty
  if (user != undefined) {
    return await userRepo.deleteUserByName(user);
  } else {
    //This will show if username is not provided in the query
    console.log("Data cannot be processed");
    return "Empty query";
  }
};

//This function will trigger the user data update
const updateUserData = async (user, user_data) => {
  //The function will proceed if the query is defined and body data is defined
  if (user != undefined && user_data != undefined) {
    return await userRepo.updateUserData(user, user_data);
  } else {
    return "Please provide the complete data.";
  }
};

const userServices = {
  createNewUser,
  readUserData,
  deleteUserByName,
  updateUserData,
};

module.exports = userServices;
