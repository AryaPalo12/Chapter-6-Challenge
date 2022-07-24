const { user_game } = require("../database/models");

//create New User function to database
const createNewUser = async (user) => {
  return await user_game.create({
    username: user.username,
    password: user.password,
  });
};

//read all user data
const readAllUserData = async (user) => {
  return await user_game.findAll();
};

//read user data by username
const readUserByName = async (user) => {
  return await user_game.findAll({
    where: { username: user },
  });
};

//delete user data by username
const deleteUserByName = async (user) => {
  return await user_game.destroy({
    //paranoid usage will be added
    where: { username: user },
  });
};

//update user data by username
const updateUserData = async (user, user_data) => {
  return await user_game.update(
    {
      username: user_data.username,
      password: user_data.password,
    },
    {
      where: {
        username: user,
      },
    }
  );
};

const userRepos = {
  createNewUser,
  readAllUserData,
  readUserByName,
  deleteUserByName,
  updateUserData,
};

module.exports = userRepos;
