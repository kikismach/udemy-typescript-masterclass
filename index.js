"use strict";
// Unknown is a better type than any
// function multiByTwo(number: unknown) {
//     return number * 2;
// }
// You can check types ot avoid error when dealing
function multiByTwo(number) {
    if (typeof number === "number") {
        return number * 2;
    }
    return "Please provide a valid number";
}
console.log(multiByTwo(4));
console.log(multiByTwo("john"));
