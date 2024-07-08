// What if the person arraty needs to have a fixed set of values
// We create a Tuple for such a situation
let person: [string, string, number];
person = ["John", "Doe", 18];

// A user array can have optional properties as well
let user: [string, string, number, string?];
user = ["Mark", "Doe", 21, "mark@doe.com"];

// Tuple with multiple string value which do not exist at the time of declaration
type listOfStudents = [number, boolean, ...string[]];

const passingStudents: listOfStudents = [3, true, "John", "Stella", "Mark"];

const failingStudents: listOfStudents = [1, false, "Scott"];

// Tuples with any number of value in the beginning or end
// Type Alias can be used with Tuples as well
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

let stringBooleanNumber: StringBooleansNumber = ["string", true, false, 32];
let booleanStringNumber: BooleansStringNumber = [true, false, "string", 32];
