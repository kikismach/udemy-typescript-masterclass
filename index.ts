class User {
  // This is how you define the properties of a class
  name: string;
  // making the email as readonly property
  readonly email: string;
  lastName?: string;

  constructor(name: string, email: string, lastName?: string) {
    this.name = name;
    this.email = email;
    this.lastName = lastName;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

// A class is used as a type by TypeScript.
// Here user is inferred as a type of User class
// Should match the shape of the User class and can be annotated as a User object
const user: User = new User("Mark", "Mark@email.com");
const user2: User = new User("Alice", "alice@email.com");

// Create a new user with an optional propery inside the class
const user3: User = new User("John", "John@email.com", "Doe");

// If I try to assign a property that does not exist on User class
// TS will throw an error because it understands that user is a typeof User
user.lastName = "Doe";

// Even assiging incorrect types will not work
// Here trying to assign a number to a property of type string will throw an error
user.name = 123;

// Trying to change the email now will also throw an errro because email is now readonly
user.email = "another@email.com";

// The objects and greet methods are now dynamic in nature
console.log(user);
console.log(user3);
