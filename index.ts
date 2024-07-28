class User {
  public name: string;
  readonly email: string;
  lastName?: string;
  // Changing the phone to private member
  private phone: number;

  constructor(name: string, email: string, phone: number, lastName?: string) {
    this.name = name;
    this.email = email;
    this.lastName = lastName;
    this.phone = phone;
  }

  greet(): string {
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

  // A greet methods can override the parent class method
  // but the condition is that the child class methods must have the same signature
  greet(): string {
    return `Hello ${this.name}! I am the admin.`;
  }
}

// Create users with phone numbers now
const user: User = new User("Mark", "Mark@email.com", 123456);
const admin: Admin = new Admin("John", "John@email.com", 123456, 11);

// Greet methods on both objects would return a different greeting
console.log(user.greet());
console.log(admin.greet());
