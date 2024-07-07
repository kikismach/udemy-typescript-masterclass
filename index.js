"use strict";
// We will see a better way to make params optional later
// when we talk about functions but for now input can be considered as undefined
// as we are talking about basic union types
function print(input) {
    if (input) {
        console.log(input);
    }
    console.log("Please input something to print");
}
