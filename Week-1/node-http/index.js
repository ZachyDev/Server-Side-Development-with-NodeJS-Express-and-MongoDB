const http = require('http');

const fs = require('fs');

const path = require('path');

const hostname = 'localhost';

const port = 4000;

// create a web server
const server = http.createServer((req,res) => {
    console.log(`Request url ${ req.url } using ${ req.method }`);

    if ( req.method == 'GET' ) {
        let fileUrl;

        if ( req.url == '/' ) fileUrl = '/index.html'
        else {
            fileUrl = req.url;
        }

    // define file path
    let filePath = path.resolve('./public' + fileUrl);
    let fileExt = path.extname(filePath);

    if( fileExt == '.html') {
        fs.exists(filePath, exists => {
            if (! exists ) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end(`404 Error: ${ filePath } not found`);
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            }
        })
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`${ fileExt } is not an html extension`)
    }
}

else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end(`${ req.method } is not supported`);
}

})

// listen to port

server.listen(port, hostname, (err) => {
    if (err) console.log(err);
    else {
        console.log(`Server running on https://${ hostname } : ${ port }`);
    }
})  