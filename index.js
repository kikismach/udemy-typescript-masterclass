"use strict";
// Duck Typing is used by TypeScript for inference of types
//* "If it looks like a duck and quacks like a duck, it's a duck".
let firstName = "Mark";
let age = 32;
let today = new Date(); // Object instantiation hence has a constructor and new keyword
let unique = Symbol(); // Primitive does not require new keyword
// If you do not assign a type to a variable TS will still try to infer it
// If I try to assign another type to firstName it will throw error
let lastName = "Doe";
lastName = 25;
// This is an example of a declaration
function addNumber(a, b) {
    return a + b;
}
// TypeScript is able to infer that final result will be a number
let finalResult = addNumber(10, 15);
