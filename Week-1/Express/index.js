const express = require('express');
const http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');

const port = 3000;

// initialize app
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());


app.use('/dishes', dishRouter);
app.use('/:dishId', dishRouter);

app.use(express.static(__dirname + '/public'));

app.use((req,res,next) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end('<html><body><h1>Inside index.html file</h1></body></html');
})

const server = http.createServer(app);

server.listen(port,hostname, () => {
    console.log(`Server listening on https://${ hostname }:${ port }`);
})