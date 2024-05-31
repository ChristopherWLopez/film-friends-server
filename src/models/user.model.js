const { DataTypes } = require('sequelize');

function makeUser(sequelize){
    return sequelize.define('User', {
        username: DataTypes.STRING,
    });
}

module.exports = { makeUser };