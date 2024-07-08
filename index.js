"use strict";
// Example if function overloading
// JavaScritp functions as Dynamic in natrue they can accept different arguments and based on that return results
// Here is an example of the same
// Show the slice method signature to show optional params
const str = "Hello, World!";
const part1 = str.slice(7);
const part2 = str.slice(7, 10);
// See this returns a different result and its up to you how you invoke the function
// Whether you use single argument or two JS functions are Dynamic to return results
// based on the arguments passed to the function
console.log(part1);
console.log(part2);
const reserve = (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDateOrDepartingFrom,
            departingFrom: departingFromOrDestination,
            destination: destination,
        };
    }
    else if (typeof returnDateOrDepartingFrom === "string") {
        return {
            departureDate: departureDate,
            departingFrom: returnDateOrDepartingFrom,
            destination: departingFromOrDestination,
        };
    }
    throw new Error("Please provide valid details to reserve a ticket");
};
// Try making a reservation
console.log(reserve(new Date(), new Date(), "New York", "Washington"));
console.log(reserve(new Date(), "New York", "Washington"));
