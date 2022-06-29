module.exports = (x,y,callback) => {
    if ( x <=0 || y <=0) {
        setTimeout(() => callback(new Error("The length and breadth must be greater than zero"),
        null
        ),200)
    }
    else {
        setTimeout(() => callback(null,
            {
                area: () => x*y,
                perimter: () => 2*(x+y)
            }
            ),2000)
    }
}
