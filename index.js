"use strict";
// Declare and object of numbers
let numbers = {
    a: 2,
    b: 3,
    c: 4,
};
// create a function to print numbers
// function sum(numbers: Numbers) {
//   console.log(numbers);
// }
// Destructure numbers
// TS will infer each of the destructured params correctly as number types
function sum({ a, b, c }) {
    return a + b + c;
}
// While invoking the function you pass the numbers object and
// destructuring with type inference will play the role
console.log(sum(numbers));
// wrong type will lead to an error
console.log(sum({ a: 3, b: 4, c: "c" }));
