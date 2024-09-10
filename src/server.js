const express = require('express');
const {userRoutes} = require('./routes/user.routes'); 
const cors = require('cors');
// const apiCall = require('../src/routes/api/apiRoutes')
const server = express();
// const axios = require('axios');
// const fetch = require('node-fetch');

server.use(cors());
server.use(express.json());

server.use(userRoutes);




server.get('/home', (req, res)=> res.send('Welcome home'));

server.get('/api', async (req, res)=>{

    const apiKey = process.env.apiKey
    const apiUrl = `http://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    try{
        const response = fetch(apiUrl);

        if(!response.ok){
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        console.log(data);

        res.json(data);

    }catch(e){
        console.error(e)

        res.status(500).json({ error: "failed to fetch data"});
    }



    res.send('This is the truth');
});


module.exports={
    server,
};