// Auto incrementing values given to enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Assigning the first number and the rest would auto increment
enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}

// String Enums
export enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

// Use case for enums
type Person = {
  name: string;
  email: string;
  password: string;
  role: Roles;
};

const person: Person = {
  name: "John",
  email: "john@email.com",
  password: "password",
  role: Roles.admin,
};

// Enums can be hetrogeneous as well
// Assigning the first number and the rest would auto increment
enum Direction3 {
  Up = 1,
  Down = "Down",
  Left = "Left",
}

// Enums are available in JavaScript as Objects
console.log(Roles);
