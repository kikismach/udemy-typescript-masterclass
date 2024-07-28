"use strict";
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    // I need a better way to set the age of the person
    // The logic needs to be encapsulated inside a method separate from constructor
    set age(age) {
        if (age > 200 || age < 0) {
            throw new Error("The age must be within range of 0-200");
        }
        this._age = age;
    }
    fullname() {
        return this.firstname + this.lastname;
    }
}
const john = new Person("John", "Doe");
const mark = new Person("Mark", "Doe");
// Age can nw be set like a property and providing an invalid age will throw an error
john.age = 210;
mark.age = -10;
console.log(john);
console.log(mark);
// Also if I need to combine properties like first and last name
// a method to do so is an ot an elegant solution
console.log(john.fullname());
// Something like john.fullname would be a better option to have
