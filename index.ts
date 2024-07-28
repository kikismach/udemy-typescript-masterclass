class User {
  // Convert name to public
  public name: string;
  readonly email: string;
  // If an access modifier is not mentioned the default remains public
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

  constructor(name: string, email: string, usersReporting: number, lastName?: string) {
    super(name, email, lastName);
    this.usersReporting = usersReporting;
  }

  // Public properties are accessible inside the child classes also
  // even methods can have access modifiers not just the properties
  public printName() {
    console.log(this.name);
  }
}

const user: User = new User("Mark", "Mark@email.com");
const admin: Admin = new Admin("John", "John@email.com", 11);

// These properties were assigned a value and these can be seen in the console
// Changing the properties below changes the values as these are public properties
user.name = "Alice";
admin.lastName = "Doe";

console.log(user);
console.log(admin);

// Since the printname method is public it can be accessed from the object itself
// or outside the class
admin.printName();
