'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Team.belongsTo(models.User, {foreignKey: 'userId'});
    }
  }
  Team.init({
    name: DataTypes.STRING,
    foundationYear: DataTypes.INTEGER,
    wins: DataTypes.INTEGER,
    feePaid: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};
