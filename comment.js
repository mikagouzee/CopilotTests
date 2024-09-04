//Create web server
//Create a web server that listens for requests on port 3000, and responds with a file named comment.html that is in the same directory as the server file.
//Use the createServer() method to create a server instance. This method accepts a callback function as an argument, which takes two arguments: req and res.
//Use the fs module to read the file and send it to the client.
//Use the listen() method to listen for requests on port 3000.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('comment.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
});

server.listen