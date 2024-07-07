"use strict";
// All Dog properties
let dog = {
    name: "Buddy",
    barks: true,
    wags: true,
};
// All Cat properties
let cat = {
    name: "Bella",
    purrs: true,
};
// All Dog and partial cat properties
let dogAndCat = {
    name: "Hybrid",
    barks: true,
    wags: true,
    purrs: true,
};
// Cannot contain partial Properties of one of the types
let partialDog = {
    name: "Hybrid",
    barks: true,
};
