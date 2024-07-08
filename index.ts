//  Why Are enums needed?
// We ofetn declare constants in JavaScript for eg.
const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";

// The intension of declaring these constants is that we do not want the value to change
// because these cannot be reassiged to developers bny mistake cannot do this
// JavaScript will not throw an error but will not reassign the constant it will always remain loading
STATUS_LOADING = "stopped";

// Auto incrementing values given to enums
// Single enum can contain all values
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
