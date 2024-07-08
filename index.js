"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
// Auto incrementing values given to enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// Assigning the first number and the rest would auto increment
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
// String Enums
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["author"] = "author";
    Roles["editor"] = "editor";
})(Roles || (exports.Roles = Roles = {}));
const person = {
    name: "John",
    email: "john@email.com",
    password: "password",
    role: Roles.admin,
};
// Enums can be hetrogeneous as well
// Assigning the first number and the rest would auto increment
var Direction3;
(function (Direction3) {
    Direction3[Direction3["Up"] = 1] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
})(Direction3 || (Direction3 = {}));
