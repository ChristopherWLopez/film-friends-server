const express = require('express');

const { User } = require('../models/index');

const userRoutes = express();

//RESTful route declarations
userRoutes.get('/user', getUsers);
userRoutes.get('/user/:id', getUser);
userRoutes.post('/user', createUser);
userRoutes.put('/user/:id', updateUser);
userRoutes.delete('/user/:id', deleteUser);

async function getUsers(_, res){
    const allUsers = await User.findAll();\
    res.json(allUsers);
}

async function getUser(req, res, next){
    const id = req.params.id;
    const user = await User.findOne({
        where: { id: id },
        include: Hobby,
    });
    if (user === null){
        next();
    } else {
        const rawUser = {
            id:user.id,
            username: user.name
        };
        res.json(rawUser);
    }
}

async function deleteUser(req, res, next){
    const id = req.params.id;
    const user = await User.findOne({ where: { id: id } });
    if(user === null){
        next();
    }else{
        await user.destroy();
        res.json({});
    }
}