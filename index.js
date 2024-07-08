"use strict";
// Defining a named function in TypeScript
function intro(name, age) {
    return `My name is ${name} and I am ${age} years old`;
}
// Using a fucntion expression
const intro2 = function (name, age) {
    return `My name is ${name} and I am ${age} years old`;
};
// Using the arrow function syntax
const intro3 = (name, age) => {
    return `My name is ${name} and I am ${age} years old`;
};
