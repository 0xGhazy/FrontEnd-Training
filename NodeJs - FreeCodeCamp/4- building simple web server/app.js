const http = require('http');

const server = http.createServer((req, res) =>{
    res.write('<h1> <center> Hello World, This my first and simple server in NodeJs! </center> </h1>');
    res.end();
    console.log(req);
})

server.listen(5000);
