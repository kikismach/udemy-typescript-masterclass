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
    get age() {
        if (this._age === undefined) {
            throw new Error("The age property has not been set as yet");
        }
        return this._age;
    }
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}
const john = new Person("John", "Doe");
const mark = new Person("Mark", "Doe");
john.age = 50;
mark.age = 30;
// We can access the age like a property even though there is a method behind the scenes
// that is working to fetch the age for us using one of the private properties of a class
console.log(john.age);
console.log(mark.age);
// Now full name can be access on a class as if if was the property of the class
console.log(john.fullname);
