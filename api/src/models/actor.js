'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    static associate(models) {
      // define association here
      Actor.belongsToMany(models.movie, { through: 'actorMovies' });

    }
  }

  Actor.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      aliases: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'actor',
    },
  )

  return Actor
}
