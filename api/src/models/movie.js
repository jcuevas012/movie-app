'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        static associate(models) {
          Movie.belongsToMany(models.actor, { through: 'actorMovies' });
        }
    }

    Movie.init(
        {
            title: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'movie',
        },
    )
    return movie
}
