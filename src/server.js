const express = require('express');
const { userRoutes } = require('./routes/user.routes'); 

const server = express();

server.use(express.json());

server.use(userRoutes);


server.get('/home', (req, res)=> res.send('Welcome home'));



module.exports={
    server,
};