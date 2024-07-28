"use strict";
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    greet() {
        return `Hello ${this.name}`;
    }
}
// A class is used as a type by TypeScript.
// Here user is inferred as a type of User class
// Should match the shape of the User class and can be annotated as a User object
const user = new User("Mark", "Mark@email.com");
const user2 = new User("Alice", "alice@email.com");
// If I try to assign a property that does not exist on User class
// TS will throw an error because it understands that user is a typeof User
user.lastName = "Doe";
// Even assiging incorrect types will not work
// Here trying to assign a number to a property of type string will throw an error
user.name = 123;
// The objects and greet methods are now dynamic in nature
console.log(user);
console.log(user2);
console.log(user.greet());
console.log(user2.greet());
