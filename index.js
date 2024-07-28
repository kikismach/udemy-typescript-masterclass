"use strict";
class User {
    constructor(name, email, phone, lastName) {
        this.name = name;
        this.email = email;
        this.lastName = lastName;
        this.phone = phone;
    }
    greet() {
        return `Hello ${this.name}`;
    }
    printPhone() {
        console.log(this.phone);
    }
}
class Admin extends User {
    constructor(name, email, phone, usersReporting, lastName) {
        // You can still use the super method to create a new user and assign the private
        // member its value while instantiating the object from the class
        super(name, email, phone, lastName);
        this.isAdmin = true;
        this.usersReporting = usersReporting;
    }
    printName() {
        console.log(this.name);
    }
    // You will now see the error in TS
    // This is bacause protected memebers can't be access even in child classes
    // they can only be access in parent classes
    printPhone() {
        console.log(this.phone);
    }
}
// Create users with phone numbers now
const user = new User("Mark", "Mark@email.com", 123456);
const admin = new Admin("John", "John@email.com", 123456, 11);
user.name = "Alice";
admin.lastName = "Doe";
// You will see that phone number can't be accessed on any of the objects
console.log(user.phone);
console.log(admin.phone);
admin.printName();
// You will see the method that is inside the class has the access to the
// private members of the class
console.log(user.printPhone());
