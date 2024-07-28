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
    // NOw the constructor will require the super method to invoke the constructor of parent class
    // Till you do not add the constructor to the Admin class super method is not needed
    // But the moment you add the constructor the super mothod is needed
    constructor(name, email, usersReporting, lastName) {
        // It is important to invoke the super meothod with the same signature as the
        // constructor of the parent class.
        super(name, email, lastName);
        this.isAdmin = true;
        // Super can be invoked with a processed value within a constructor is your choice.
        // Its just that it has to be invoked
        // super ("John", "john@email.com");
        this.usersReporting = usersReporting;
    }
}
const user = new User("Mark", "Mark@email.com");
// Now users reporting need to be added to initialiser
const admin = new Admin("John", "John@email.com", 11);
console.log(user);
console.log(admin);
