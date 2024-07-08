// A generic array function that gets first element of every type of array
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// We declare two different tyopes of array
const numberArray = [1, 2, 3];
const stringArray = ["a", "b", "c"];

// Typescript is correctly able to infer the value that will be return by expression
// Even though the function is the same the returned type is different based on the input value
let stringOutput = getFirstElement(stringArray);
let numberOutput = getFirstElement(numberArray);

// Generics can have constraints as well
type HasLength = {
  length: number;
};

function logLength<T extends HasLength>(item: T): void {
  console.log(item.length);
}

// Any array like value that has a length property on it will be accepted as an argument
logLength(numberArray);
logLength(stringArray);
logLength("Any String");

// But if used for an object it will throw an error
logLength({ name: "John", length: 12 });
