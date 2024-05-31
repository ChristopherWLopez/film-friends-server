const express = require('express');

const server = express();


server.get('/home', (req, res)=> res.send('Welcome home'));



module.exports={
    server,
};