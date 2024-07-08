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

// Redeclaring the same  using Enum
// const Enum, is not compiled in JavaScript as an Object but only the value is used
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}
// Show the use of value
let eDirection = EDirection.Up;

// Declaring an object with same values as a constant
// Typescript sets each property as readonly
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

// Now this acts as an enum because you cannot change the value of properties
console.log("Object as const", ODirection.Up);
ODirection.Up = "newValue";
