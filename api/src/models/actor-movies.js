'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class ActorMovies extends Model {
    static associate(models) {
      ActorMovies.hasMany(models.actor)
      ActorMovies.hasMany(models.movie)
    }
  }

  ActorMovies.init(
    {
      actorRole: {
        type: DataTypes.STRING,
      },
      movieId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'movie', // 'Movies' would also work
          key: 'id'
        }
      },
      actorId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'actor', // 'Actors' would also work
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'actorMovies',
    },
  )

  return ActorMovies
}
