/**
 * string types
 */
var firstName: string = "John";
let autoMobile: string = "BMW";
// Variables defined with const cannot be Reassigned
// Constants therefore have a stricter type
// It's better to let TypeScript infer this correctly instead of making it a string
const city = "New York";
// Constant cannot be reassigned doing so you get an error
city = "San Fransisco";

//  Any expression that eveluates to a string is also a string type
let students = 32;
let studentsAsString: string = students.toString();

/**
 * Number types
 */
var age: number = 21;
let year: number = 2024;
// Again constants are a stricter type and use literal values
const numberOfMembers = 61;
// Any express that evaluates to a number is a number type
let stringToNumber: number = parseInt("1985");

/**
 * Boolean Types
 */
var isStudent: boolean = true;
let hasGraduated: boolean = false;
// Constant here again is not a boolean value but always true
const alwaysStudent = true;
// Expressions that evalue to a boolean value are also boolean.
let minimumAge: boolean = age >= 6 ? true : false;
