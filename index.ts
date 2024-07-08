// Defining a named function in TypeScript
// Functions often need optional params
// We can add optional params by using ? just like we do with objects, PAUSE AND PRACTICE
function intro(name: string, age: number, country?: string): string {
  if (country) {
    return `My name is ${name} and I am ${age} years old, I live in ${country}`;
  }
  return `My name is ${name} and I am ${age} years old`;
}

// TypeScript will throw an error if all defualt params are not added as arguments
// The error displays while you are programming and not at runtime
//! intro("John");
intro("John", 32);
