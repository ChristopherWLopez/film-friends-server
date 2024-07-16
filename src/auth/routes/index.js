const express = require('express');
const base64 = require('base-64');
const { User } = require('../models');

const authRoutes = express();

authRoutes.post('/signup', signup);

authRoutes.post('signin', signin);

async function signup(req, res, next){

    try{

        // on successful account creation return a 201 status eith the user object in the body
        // username and password gets sent on the req.body these will get stores in the in our model
        const { username, password } = req.body;
        
        await User.createWithHashed(username, password);
        res.send(201);
    }catch(e){
        console.error(e);
    }
        // on any error, trigger your error handler with an appropriate error
}

async function signin(req, res, next){

    let authorization = req.header('Authorization');
    if(!authorization.startsWith('Basic')){
        next(new Error('Invalid authorization scheme'));
        return;
    }
    
    authorization = base64.decode(authorization.replace('Basic ' , ''));

    console.log('Basic authorization request', authorization);

    const [ username, password ] = authorization.split(':');
    let user = await User.findLoggedIn(username, password);
    if(user){
        res.status(200).send({ username: user.username });
    }else{
        next(new Error('Invalid login') );
    }
}