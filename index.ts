class User {
  // This is how you define the properties of a class
  name = "John";
  email = "john@email.com";

  constructor(name: string, email: string) {
    console.log(name);
    console.log(email);
  }

  greet() {
    return `Hello John`;
  }
}

// A class can be used to create an instance of itself
// An instance is an object that you create from a class
const user = new User("Mark", "Mark@email.com");
const user2 = new User("Alice", "alice@email.com");

// This class generates the same object everytime
// We will see how to solve this in the next lecture
console.log(user);
console.log(user2);
console.log(user.greet());
