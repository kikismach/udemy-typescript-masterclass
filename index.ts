class User {
  constructor(
    public name: string,
    readonly email: string,
    private phone: number,
    public lastName?: string
  ) {}

  greet(): string {
    return `Hello ${this.name}`;
  }
}

class Admin extends User {
  public isAdmin: boolean = true;

  constructor(
    name: string,
    email: string,
    phone: number,
    public usersReporting: number,
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
