class User {
  // This is how you define the properties of a class
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

// A class can be used to create an instance of itself
// An instance is an object that you create from a class
const user = new User("Mark", "Mark@email.com");
const user2 = new User("Alice", "alice@email.com");

// The objects and greet methods are now dynamic in nature
console.log(user);
console.log(user2);
console.log(user.greet());
console.log(user2.greet());
