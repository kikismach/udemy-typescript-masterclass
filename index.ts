// Date;
// Array;
// Map;
// Set;
// Promise;
// RegExp;
// Error;
// Function;
// Symbol;
// WeakMap;
// WeakSet;

// As naming convention use Upper Camel Case or also called PascalCase
type CustomString = string;
type CustomNumberType = number;
type CustomDate = Date;
type CustomSymbol = Symbol;

let firstName: CustomString = "Mark";
let age: CustomNumberType = 32;
let today: CustomDate = new Date(); // Object instantiation hence has a constructor and new keyword
let unique: CustomSymbol = Symbol(); // Primitive does not require new keyword
