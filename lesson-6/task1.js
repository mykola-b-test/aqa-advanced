
// function declaration
function reqtangularSquare1(width, height) {
    let square = width * height;
    return square;
}
console.log(reqtangularSquare1(5, 10));

// function expression
const reqtangularSquare2 = function (width, height) {
    return width * height;
}
console.log(reqtangularSquare2(5, 10));

// arrow function
const reqtangularSquare3 = (width, height) => width * height;
console.log(reqtangularSquare3(5, 10));