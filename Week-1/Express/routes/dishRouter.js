const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());
// ALL
dishRouter.route('/', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})

// GET
.get((req,res,next) => {
    res.end('Will show all the dishes from the dishes endpoint');
})

// POST
.post((req,res,next) => {
    res.end('Will add the dish' + req.body.name + 'with details' + req.body.description);
})

// PUT
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})

// DELETE
.delete((req,res,next) => {
    res.end('Deleteing all the dishes');
})


dishRouter.route('/:dishId', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})

// GET
.get((req,res,next) => {
    res.end('Will send details of the dish ' + req.params.dishId);
})

// POST
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('POST operations not supported on /dishes' + req.params.dishId);
})

// PUT
.put((req,res,next) => {
    res.write('Updating the dish ' + req.params.dishId + '\n');
    res.end('Will update dish with: ' + req.body.name + 'with details' + req.body.description);
})

// DELETE
.delete((req,res,next) => {
    res.end('Deleting dish with ' + req.params.dishId);
})

module.exports = dishRouter;