// rectangle object
let rect = {
    perimeter: (x,y) => (2*(x+y)),
    area : (x,y) => (x*y)

}

const solveRectangle = (l,b) => {
    console.log(`Solving for rectangle with length ${l} and breadth ${b}`);

    if ( l <=0 || b <=0) {
        console.log(`The legth and breadth must be greater than zero.`);
    }
    else {
        console.log(`The perimeter of the rectangle is ${ rect.perimeter(l,b)}`);
        console.log(`The area of the rectangle is ${ rect.area(l,b) }`);
    }
}


solveRectangle(10,20);
solveRectangle(-1,20);