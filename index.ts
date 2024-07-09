type Events = {
  id: number;
  date: Date;
  type: "indoor" | "outdoor";
};

// The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type
// -> "id" | "date" | "type"

type UnionOfKeysOfEvents = keyof Events;

// You see these are literally the union of name of the keys of the Events object
let idOfEvent: UnionOfKeysOfEvents = "id";
let dateOfEvent: UnionOfKeysOfEvents = "date";

// If index signatures where keys are defined as numeric properties
type Numeric = {
  [key: number]: string;
};

type NumericKeyOf = keyof Numeric;

type NumberAndString = {
  [key: string]: string;
};
// We get a union of numbers as well as a string because this is how JavaScript objects work behind the scenes
// NumberAndString is string | number — this is because JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"].
type NumberAndStringKeyoff = keyof NumberAndString;

let stringObject: NumberAndString = {
  0: "first",
  second: "first",
};

// Accessing the object proerty with the index of the property
console.log(stringObject["0"]);

// Declaring partial types using generics and keyof
type Person = {
  name: string;
  age: number;
  address: string;
};

// Creating a type where the keys are the same as Person but the values are optional and nullable
// Hover over PartialPerson to see how TypeScript is inferring it
type PartialPerson = {
  [K in keyof Person]?: Person[K] | null;
};
