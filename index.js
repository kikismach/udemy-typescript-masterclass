"use strict";
let id = Symbol(1234);
let alphabeticId = Symbol("id");
let user = {
    [id]: "12344",
    [alphabeticId]: "uniqueId",
    name: "Mark",
    getId() {
        return this[id];
    },
};
// Symbols are  private
console.log(user.name);
// will throw a typescript error with id not accessible
// Throws error because the key here is not 'id' but a symbol generated with 1234 who's value is unknown but guaranteed to be unique
//! console.log(user.id);
// The id property does exist add the getId method to the object
console.log(user.getId());
