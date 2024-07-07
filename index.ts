let city = "New York"; // string
let population = 8400000;
const age = 32;
let oldAge = 79 as const;
let newAge = oldAge;
let data = new Map();
let score = [90, 86, 100];
type Primitive = string | number | boolean;
type CustomName = "John" extends string ? string : "John";
type CustomAge = typeof newAge extends number ? 79 : number;
type CheckData = typeof data extends Object ? true : false;
type CheckScore = typeof score extends never ? {} : [];

/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */

// age = 85;
// score.push(10);
// score.push("New Score");
// let customAge: CustomAge = 50;
// let primitive: Primitive = new Date();
// let years: CheckScore = [];
