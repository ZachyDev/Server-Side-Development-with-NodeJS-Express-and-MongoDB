const http = require('http');

const fs = require('fs');

const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
    console.log(`Request for ${ req.url } using ${ req.method } method.`);

    if( req.method == 'GET' ) {
        let fileUrl;

        if ( req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        let filePath = path.resolve('./public' + fileUrl);  
        let fileExt = path.extname(filePath);

        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                if (!exists) {
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error: 404 ' + req.url + ' not found</h1></body></html>');
                }
                res.statusCode = 200;
                // res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
                // return;
            })
        }
        else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html');
                    res.end('<html><body><h1>Error: 404 ' + fileExt + 'is not html extension </h1></body></html>');
        }
    }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<html><body><h1>Error: 404 ' + req.method + ' not supported</h1></body></html>');
        }

})

server.listen(`${ port }`, `${ hostname }`, () => {
    console.log(`Server running at https://${ hostname }:${ port }/`);
})