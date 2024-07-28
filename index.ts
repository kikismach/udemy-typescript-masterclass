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
  usersReporting: number;

  // NOw the constructor will require the super method to invoke the constructor of parent class
  // Till you do not add the constructor to the Admin class super method is not needed
  // But the moment you add the constructor the super mothod is needed
  constructor(name: string, email: string, usersReporting: number, lastName?: string) {
    // It is important to invoke the super meothod with the same signature as the
    // constructor of the parent class.
    super(name, email, lastName);

    // Super can be invoked with a processed value within a constructor is your choice.
    // Its just that it has to be invoked
    // super ("John", "john@email.com");

    this.usersReporting = usersReporting;
  }
}

const user: User = new User("Mark", "Mark@email.com");
// Now users reporting need to be added to initialiser
const admin: Admin = new Admin("John", "John@email.com", 11);

console.log(user);
console.log(admin);
