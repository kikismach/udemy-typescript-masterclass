// app.ts
import { calculate } from "./calculator.js";

const sum = calculate(5, 3); // Returns 8
const concatenated = calculate("5", 3); // Returns '53'
const mixed = calculate(10, "20"); // Returns '1020'
const strSum = calculate("Hello, ", "world!"); // Returns 'Hello, world!'

console.log(sum, concatenated, mixed, strSum);
