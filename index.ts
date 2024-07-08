// Defining a named function in TypeScript
function intro(name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
}

// Using a fucntion expression
const intro2 = function (name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old`;
};

// Using the arrow function syntax
const intro3 = (name: string, age: number): string => {
  return `My name is ${name} and I am ${age} years old`;
};
