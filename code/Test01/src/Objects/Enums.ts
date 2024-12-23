// Constants

const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";

const WEEKEND_DAYS = {
  SATURDAY: "Sabado",
  SUNDAY: "Domingo",
};


// Enums

enum Direction {
  Up, // 0
  Down, // 1
  Left,
  Right,
}
console.log(Direction.Up);

enum Direction2 {
    Up= 3, // 3
    Down, // 4
    Left,
    Right,
  }
  console.log(Direction2.Up);


enum Roles {
    Admin = "admin",
    Client = "client",
    Author = "author"
}

type Person = {
    name: string;
    email: string;
    password: string;
    role: Roles
}

let newPerson: Person = {
    name: "John",
    email: "john.doe@email.com",
    password: "123456abc",
    role: Roles.Author
};
console.log(newPerson);


enum Direction3 {
    Up = 1,
    Down = "down",
    Left = "left",
    Right = 2,
    Diagonal
}

type Testing = {
  weekDay: string
}



// ENUMS vs Objects

enum DirectionVsObj {
  Up,
  Down,
  Left,
  Right
}

// With const is not compiled to Js, to avoid the creation of enum in JsHee
const enum DirectionVsObj2 {
  Up,
  Down,
  Left,
  Right
}

const ODirection = {
  Up:0,
  Down:1,
  Left:2,
  Right:3
} as const;


// Computed Enums
enum AccessPermissions {
  None = 0,
  Read = 1,
  Write = 2,
  ReadWrite = Read + Write,
  Delete = 4,
  All = ReadWrite | Delete
}

console.log(AccessPermissions.ReadWrite)
console.log(AccessPermissions.All)



//Enums as Union and Types

enum ShapeKind {
  Circle = "circle",
  Square = "square"
}

type Circle = {
  kind: ShapeKind.Circle // specific value/type
  radius: number
}

type Square = {
  king: ShapeKind.Square,
  sideLength: number
}


function printShape(shape: ShapeKind) {
  console.log(shape);
}
printShape(ShapeKind.Circle);



// Exercise Section 5
const numbers: number[] = [1, 2, 3];
const strings: string[] = ["1", "2", "3"];

const personTuple: [string, number] = ["John Doe", 38];

const colorsArray: ReadonlyArray<string> = ["Red", "White", "Black"];
const colorsArray2: readonly string[] = ["Red", "White", "Black"];

const numbersTuple: readonly [number, number] = [1,2];
//numbersTuple[0] = 8;

enum StatusEnum {
  Active = "active",
  Inactive = "inactive",
  Pending = "pending"
}

const Status = {
  Active: "active",
  Inactive: "inactive",
  Pending: "pending"
} as const;

export {}