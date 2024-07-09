//  First declare a generics function signature
type GetFirstElement = <T>(arr: T[]) => T;
// A generic array function that gets first element of every type of array
const getFirstElement: GetFirstElement = (arr) => {
  return arr[0];
};

// We declare two different tyopes of array
const numberArray = [1, 2, 3];
const stringArray = ["a", "b", "c"];

// Typescript is correctly able to infer the value that will be return by expression
// Even though the function is the same the returned type is different based on the input value
let stringOutput = getFirstElement(stringArray);
let numberOutput = getFirstElement(numberArray);

// Where do declare generic dictates when typescript will binc a concrete type to a generic
// what if the above function was declared with a different placement of generic
type FirstElement<T> = (arr: T[]) => T;

// Here if the egenetic type is not passed at the time of function declaration TS will throw and error
// So now you need to tell TypeScript which types can we used with this fucntion which solves a completely different purpose from the function that has been declared above
// Hover over the function param and you will see that TS now identifies that param will be an
// array of strings
const firstElement: FirstElement<string> = (arr) => {
  return arr[0];
};

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
