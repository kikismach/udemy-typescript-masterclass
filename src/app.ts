// Base definition of User interface and class
interface IUser {
  id: number;
  name: string;
}

// Adding properties in the security module
interface IUser {
  passwordHash: string;
}

// IUser is merged automatically
// When additional property is added in the IUser interface then TS forces you to add the new
// property to the class for the class to completely implement the IUser interface
class User implements IUser {
  constructor(public id: number, public name: string) {}
}

let baseUser: User = new User(1, "John Doe");
console.log(baseUser);
