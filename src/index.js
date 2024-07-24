const { server } = require('./server');

const port = process.env.PORT || 3002;

server.listen(port, async()=>{
    console.log(`Listening on PORT: ${port}`);
});