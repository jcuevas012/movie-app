'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        static associate(models) {
            // define association here
        }
    }
    user.init({
        email: { type: DataTypes.STRING, require: true },
        password: { type: DataTypes.STRING, require: true },
    }, {
        sequelize,
        modelName: 'user',
    });
    return user;
};
//# sourceMappingURL=user.js.map