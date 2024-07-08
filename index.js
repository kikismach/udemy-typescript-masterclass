"use strict";
//  Async fucntion in JavaScript always return a promise
// Declaration of async function using the function keyword
async function fetchFromDatabase(id) { }
//  Declaration of async fucntion using the arrow function syntax
const anotherAsyncFunction = async () => { };
// Async fucntion as a function express
const fucntionExpression = async function () { };
// Setting return types apart from any
async function returnString(id) {
    return Promise.resolve("string");
}
// If User type is nto returned TS throws an error
async function returnObject(id) {
    return Promise.resolve({ name: "John", age: 21 });
}
