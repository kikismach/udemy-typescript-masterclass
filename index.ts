let person = {
  name: "Mark",
  age: 32,
};

// Car is any object without a shape or defined properties
let car: Object = {
  brand: "BMW",
  color: "black",
};

// The problem using teh Object type, its a super type and Arrays are also objects
let score: Object = [];

// If you see just because car is a Object I can re-assign it as an array
// ! This is a problem
car = [21, 32, 48];

// Defining an object with the litral syntax
let newCar: {} = {
  brand: "BMW",
  color: "black",
};

// The problem with usign the litral object {} is that now properties are not defined and can vary
// This can lead to errors in the application
newCar = {
  brand: "BMW",
};
