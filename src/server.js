const express = require('express');
const { userRoutes } = require('./routes/user.routes'); 
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());

server.use(userRoutes);


server.get('/home', (req, res)=> res.send('Welcome home'));

server.get('api/data', (req, res)=>{
    res.send("This is the truth");
});



module.exports={
    server,
};