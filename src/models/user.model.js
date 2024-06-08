const { DataTypes } = require('sequelize');

function makeUser(sequelize){
    return sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
        },
    });
}

module.exports = { makeUser };