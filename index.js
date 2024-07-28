"use strict";
class User {
    constructor(name, email, lastName) {
        this.name = name;
        this.email = email;
        this.lastName = lastName;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
class Admin extends User {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
}
// A class is used as a type by TypeScript.
// Here user is inferred as a type of User class
// Should match the shape of the User class and can be annotated as a User object
const user = new User("Mark", "Mark@email.com");
const admin = new Admin("John", "John@email.com");
console.log(user);
console.log(admin);
