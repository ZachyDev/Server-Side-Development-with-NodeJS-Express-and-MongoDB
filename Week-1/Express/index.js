const express = require('express');
const http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const bodyParser = require('body-parser');

const port = 3000;

// initialize app
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// setting up a basic dishes endpoint

// ALL
app.all('/dishes', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})

// GET
app.get('/dishes/', (req,res,next) => {
    res.end('Will show all the dishes from the dishes endpoint');
})

// POST
app.post('/dishes', (req,res,next) => {
    res.end('Will add the dish' + req.body.name + 'with details' + req.body.description);
})

// PUT
app.put('/dishes', (req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not suppoorted on /dishes');
})

// DELETE
app.delete('/dishes', (req,res,next) => {
    res.end('Deleteing all the dishes');
})


// ALL
app.all('/dishes/:dishId', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})

// GET
app.get('/dishes/:dishId', (req,res,next) => {
    res.end('Will send details of the dish ' + req.params.dishId);
})

// POST
app.post('/dishes/:dishId', (req,res,next) => {
    res.statusCode = 403;
    res.end('POST operations not supported on /dishes' + req.params.dishId);
})

// PUT
app.put('/dishes/:dishId', (req,res,next) => {
    res.write('Updating the dish ' + req.params.dishId + '\n');
    res.end('Will update dish with: ' + req.body.name + 'with details' + req.body.description);
})

// DELETE
app.delete('/dishes/:dishId', (req,res,next) => {
    res.end('Deleting dish with ' + req.params.dishId);
})





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