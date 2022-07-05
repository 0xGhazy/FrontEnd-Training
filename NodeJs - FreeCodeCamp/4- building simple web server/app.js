const http = require('http');
const url = require('url');

const server = http.createServer((req, res) =>{

    if (req.url === "/"){
        res.end("Hello it's home page.")
    } else if (req.url === "/about"){
        res.end("<h1><center> Hello it's about page </center></h1>")
    }
})

// listen on port 5000
server.listen(5000);
