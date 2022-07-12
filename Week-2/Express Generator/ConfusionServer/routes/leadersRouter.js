const express = require('express');
const bodyParser = require('body-parser');

const leadersRoute = express.Router();
leadersRoute.use(bodyParser.json());

leadersRoute.route('/', (req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    next();
})
.get((req,res,next) => {
    res.end('Will show all leaders from the /leaders endpoint');
})
.put((req,res,next) => {
    res.end('PUT operation is not supported in  /leaders endpoint');
})
.post((req,res,next) => {
    res.end(`Will add ${ req.body.name } and ${ req.body.description} to the /leaders endpoint`);
})
.delete((req,res,next) => {
    res.end(`Will delete from the leaders endpoint`);
})
module.exports = leadersRoute;