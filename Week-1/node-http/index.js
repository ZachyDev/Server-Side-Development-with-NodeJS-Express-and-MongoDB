const http = require('http');

const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
    console.log(req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.write('This is a test');
    res.statusCode = 200;
    res.end('<html><body><h1>Hello World</h1></body></html>');
})

server.listen(`${ port }`, `${ hostname }`, () => {
    console.log(`Server running at https://${ hostname }:${ port }/`);
})