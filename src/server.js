const express = require('express');

const server = express();

server.get('/hello', (req, res)=> res.send('hello'));

module.exports={
    server,
};