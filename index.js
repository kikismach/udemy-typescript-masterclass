"use strict";
class User {
    constructor(name, email, phone, lastName) {
        this.name = name;
        this.email = email;
        this.lastName = lastName;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
class Admin extends User {
    constructor(name, email, phone, usersReporting, lastName) {
        super(name, email, phone, lastName);
        this.isAdmin = true;
        this.usersReporting = usersReporting;
    }
    // Public properties are accessible inside the child classes also
    // even methods can have access modifiers not just the properties
    printName() {
        console.log(this.name);
    }
}
const user = new User("Mark", "Mark@email.com", 123456);
const admin = new Admin("John", "John@email.com", 123456, 11);
// These properties were assigned a value and these can be seen in the console
// Changing the properties below changes the values as these are public properties
user.name = "Alice";
admin.lastName = "Doe";
console.log(user);
console.log(admin);
// Since the printname method is public it can be accessed from the object itself
// or outside the class
admin.printName();
