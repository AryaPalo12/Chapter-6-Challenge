'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_game_history.init({
    score: DataTypes.INTEGER,
    play_time: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    last_login: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user_game_history',
  });
  return user_game_history;
};