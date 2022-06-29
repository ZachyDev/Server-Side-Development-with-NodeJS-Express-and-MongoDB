// rectangle object
let rect = require('./rectangle');

const solveRectangle = (l,b) => {
    rect(l,b, (err, rectangle) => {
        if ( err ) {
            console.log(err.message);
        }
        else {
            console.log(`Area: ${rectangle.area()}`);
            console.log(`Perimeter: ${rectangle.perimter()}`);
        }
    })
}


solveRectangle(10,20);
solveRectangle(-1,20);