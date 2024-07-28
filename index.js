"use strict";
class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        // We want the age to be between a valid human age value
        // It cannot be negative or above human life expectancy
        // Writing conditional logic inside the constructor like this is not a good idea
        if (age > 200 || age < 0) {
            throw new Error("The age must be within range of 0-200");
        }
    }
    fullname() {
        return this.firstname + this.lastname;
    }
}
const john = new Person("John", "Doe", 45);
const mark = new Person("Mark", "Doe", 35);
// I can set the age to a negative value if age is remains as a public property
john.age = 210;
mark.age = -10;
console.log(john);
console.log(mark);
// Also if I need to combine properties like first and last name
// a method to do so is an ot an elegant solution
console.log(john.fullname());
// Something like john.fullname would be a better option to have
