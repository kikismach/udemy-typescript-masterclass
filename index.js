"use strict";
// At times there are functions which do not return anything
// this function does not return anything
// Hence for rerturn type we can use a special TypeScript type called void
function writeToDatabase(value) {
    console.log("Writing to database:", value);
}
// This is different from void because this function never completes execution
function throwError(error) {
    throw new Error(error);
}
