const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const COMPLEXITY = 8;

function makeUser(sequelize){
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    User.createWithHashed = async (username, password)=> {

        password = await bcrypt.hash(password, COMPLEXITY);
        console.log('Creating new user', username, password);

        const user = await User.create({ username, password });
        return user;
    };

    User.findLoggedIn = async ( username, password)=>{

        const user = await User.findOne({ })
    }

}   