"use strict";
let city = "New York"; // string
let population = 8400000; // number
const age = 32; // litral 32
let oldAge = 79; // litral 79
let newAge = oldAge; // litral 79
let data = new Map(); // Map<any, any>
let score = [90, 86, 100]; // number []
/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */
age = 85; // @Error age is a const and connot be re-assigned
score.push(10); // This is valid as score is an array of numbers
score.push("New Score"); // @Errro Score is an array of number and can only have numbers
let customAge = 50; // @Error custom age has a literal value of 79
let primitive = new Date(); // @Error data is not a part of the union
let years = []; // Valid is years is a litral empty array
