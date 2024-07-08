"use strict";
// Unlimited function params using the
function multiplyBy(by, ...numbers) {
    return numbers.map((eachNumber) => by * eachNumber);
}
// Calling the function
console.log(multiplyBy(2, 3, 4, 5));
console.log(multiplyBy(2, 3, 4));
// Strictly typing rest parameters
const args = [8, 5];
// We get this erro because if we see the signature of the function it takes in 2 arguments
// Here TS s not sure that args will always contain 2 arguments
const angle = Math.atan2(...args);
// The solution is to define args as a tuple
const args1 = [8, 5];
// Now TypeScript will not thwo an error because it will now know that args are always of a fixed length because its a tuple
const angle1 = Math.atan2(...args1);
// We can define type annotate it like this as well
const args2 = [8, 5]; // Here using as const is not needed
const angle2 = Math.atan2(...args2);
