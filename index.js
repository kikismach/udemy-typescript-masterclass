"use strict";
// Trying to create a simple implementation of JavaScript's own filter method
const filter = (array, predicate) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
};
let numbers = [1, 3, 4, 6, 9, 7, 10, 12];
// Predicate to filter all numbers greater than 7
function predicate(item) {
    return item > 7;
}
let animals = ["cat", "bat", "rat", "mat"];
// Predicate to filter all cats from animals array
function filterCats(item) {
    return item === "cat";
}
// Result of invoking the function
console.log(filter(numbers, predicate));
console.log(filter(animals, filterCats));
