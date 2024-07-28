class User {
  public name: string;
  readonly email: string;
  lastName?: string;
  // Adding a protected member
  protected phone: number;

  constructor(name: string, email: string, phone: number, lastName?: string) {
    this.name = name;
    this.email = email;
    this.lastName = lastName;
    this.phone = phone;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

class Admin extends User {
  isAdmin: boolean = true;
  usersReporting: number;

  constructor(
    name: string,
    email: string,
    phone: number,
    usersReporting: number,
    lastName?: string
  ) {
    super(name, email, phone, lastName);
    this.usersReporting = usersReporting;
  }

  public printName() {
    console.log(this.name);
  }

  // Methods can use access modifiers as well
  protected printPhone() {
    console.log(this.phone);
  }

  // Declaring a method to show that protected members can be used inside classes and child
  // classes as well
  public useProtectedPhone() {
    this.printPhone();
  }
}

// Create users with phone numbers now
const user: User = new User("Mark", "Mark@email.com", 123456);
const admin: Admin = new Admin("John", "John@email.com", 123456, 11);

user.name = "Alice";
admin.lastName = "Doe";

// Protected members cannot be access in the final objects as they are only available in the
// parent class as well as the child class.
console.log(user.phone);
console.log(admin.phone);

// even protected methods are not available to us outside the class
admin.printPhone();

// but protected methods are available inside the parent class as well as the child class
admin.useProtectedPhone();

admin.printName();
