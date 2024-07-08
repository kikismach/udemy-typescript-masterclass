"use strict";
const students = ["Alice", "Bob", "Mark"];
// Lets assume that you are looping through the students array
// Since students is an array fo strings even when using annonymous function like this
// TypeScript is able to correctly infer the type of each student
students.map((student) => {
    console.log(student);
});
// This also works with the function defined using the function keyword and not just the arrow functions
students.map(function (student) {
    console.log(student);
});
