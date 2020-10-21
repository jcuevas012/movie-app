'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class person extends Model {
        static associate(models) {
            // define association here
        }
    }

    person.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            aliases: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'person',
        },
    )
    return person
}
