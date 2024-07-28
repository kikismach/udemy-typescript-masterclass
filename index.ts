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

class Admin extends User {
  isAdmin: boolean = true;
}

// A class is used as a type by TypeScript.
// Here user is inferred as a type of User class
// Should match the shape of the User class and can be annotated as a User object
const user: User = new User("Mark", "Mark@email.com");
const admin: Admin = new Admin("John", "John@email.com");

console.log(user);
console.log(admin);
