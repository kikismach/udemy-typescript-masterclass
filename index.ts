interface User {
  username: string;
  email: string;
  login(): void;
}

// We declare an Admin class that implements the user interface and has some additional functionality
class Admin implements User {
  constructor(public username: string, public email: string, public adminLevel: number) {}

  login(): void {
    console.log(`Admin is now loogged in.`);
  }

  manageUsers(): void {
    console.log(`Managing users with admin level ${this.adminLevel}`);
  }
}

// We declare a Customer class that implements the user interface and has some additional functionality
class Customer implements User {
  constructor(public username: string, public email: string, public customerId: number) {}

  login(): void {
    console.log(`Customer ${this.username} logged in with email ${this.email}`);
  }

  makePurchase(): void {
    console.log(
      `Customer ${this.username} is making a purchase with customer ID ${this.customerId}`
    );
  }
}

// can now Semalessly interface with the rest of the application

class Auth {
  public static login(user: User) {
    user.login();
  }
}

const admin: Admin = new Admin("mark", "mark@doe.com", 1);

// You can pass the admin user and it will login
// TypeScript will not complain because Admin is a subtype of user or Admin implemnts User
Auth.login(admin);

// Similarly same Auth.login() will work for the rest of the user types who use the same interface
const customer: Customer = new Customer("John", "john@doe.com", 23);
// We can login the customer using the same method
Auth.login(customer);
