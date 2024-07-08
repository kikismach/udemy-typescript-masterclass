//  Async fucntion in JavaScript always return a promise
// Declaration of async function using the function keyword
async function fetchFromDatabase(id: number): Promise<any> {}

//  Declaration of async fucntion using the arrow function syntax
const anotherAsyncFunction = async (): Promise<any> => {};

// Async fucntion as a function express
const fucntionExpression = async function (): Promise<any> {};

// Setting return types apart from any
async function returnString(id: number): Promise<string> {
  return Promise.resolve("string");
}

type User = {
  name: string;
  age: number;
};

// If User type is nto returned TS throws an error
async function returnObject(id: number): Promise<User> {
  return Promise.resolve({ name: "John", age: 21 });
}
