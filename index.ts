function returnParam<Type>(param: Type): Type {
  return param;
}

// Generic function declaration as an arrow function
// using a call signature
const myParam: <T>(param: T) => T = (param) => param;

// Using a function expression
const myParam2 = function <U>(param: U): U {
  return param;
};

// Using a call signature in an object
type ObjectType = {
  myParam: <V>(param: V) => V;
};

// Declare Generic Type
type MyParam = <AnyName>(param: AnyName) => AnyName;
