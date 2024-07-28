"use strict";
class User {
    constructor(name, email, phone, lastName) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.lastName = lastName;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
class Admin extends User {
    constructor(name, email, phone, usersReporting, lastName) {
        super(name, email, phone, lastName);
        this.usersReporting = usersReporting;
        this.isAdmin = true;
        this.usersReporting = usersReporting;
    }
    // A greet methods can override the parent class method
    // but the condition is that the child class methods must have the same signature
    greet() {
        return `Hello ${this.name}! I am the admin.`;
    }
}
// Create users with phone numbers now
const user = new User("Mark", "Mark@email.com", 123456);
const admin = new Admin("John", "John@email.com", 123456, 11);
// Greet methods on both objects would return a different greeting
console.log(user.greet());
console.log(admin.greet());
