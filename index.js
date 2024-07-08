"use strict";
// Practice Questions
//* 1. Create an array numbers that only accepts numbers and another array strings that only accepts strings.
let numbers = [1, 2, 3];
let strings = ["a", "b", "c"];
//* 2. Create a tuple person that holds a string (name) and a number (age).
let person = ["Alice", 30];
//* 3. Create a readonly array colors that holds strings and a readonly tuple point that holds two numbers (x, y). Attempt to modify their elements and observe the TypeScript error.
const colors = ["red", "green", "blue"];
const point = [10, 20];
//* 4. Create an enum called StatusEnum that should 3 properties Active, Inactive, Pending
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["Active"] = "active";
    StatusEnum["Inactive"] = "inactive";
    StatusEnum["Pending"] = "pending";
})(StatusEnum || (StatusEnum = {}));
//* 5. Create an object as const called Status with the same structure as an StatusEnum
const Status = {
    Active: "active",
    Inactive: "inactive",
    Pending: "pending",
};
