// Let us look at this simple function which just returns the param

//* function returnParam(param) {
//*   return param;
//* }

// TS has a problem and is warning that param is of any type or is implicitly declared at any
//* function returnParam(param: any) {
//*   return param;
//* }

// While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

// Since now we do not know the return type of this function we end up usign the return type as
// any as well. We are back to JS behaviour

//* function returnParam(param: any): any {
//*   return param;
//* }

// Here, we will use a type variable, a special kind of variable that works on types rather than values. This is a generic variable we can pass to our function to retain the type of the value used
// This is how it is done in case of functions

function returnParam<Type>(param: Type): Type {
  return param;
}

// With this generic in place the value of the type used to invoke the function is retained
// thi is one way of invoking the function
let stringOutput = returnParam<string>("string");

//Here we explicitly set Type to be string as one of the arguments to the function call, denoted using the <> around the arguments rather than ().

// The second way is also perhaps the most common. Here we use type argument inference — that is, we want the compiler to set the value of Type for us automatically based on the type of the argument we pass in:
let stringOutput2 = returnParam("string");
let numberOutput = returnParam(100);
let numberArray = returnParam([1, 2, 3]);
let objectOutput = returnParam({ name: "Mark", age: 21 });

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
