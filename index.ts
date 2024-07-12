// Declare Generic Type
type MyParam = <AnyName>(param: AnyName) => AnyName;

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
