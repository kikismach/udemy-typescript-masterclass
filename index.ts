// any type is the default JavaScript behavior of types.
// The intention is to avoid any type
let firstName: any = "Mark";

// Once any time is assigned then any value can be assigned to such variable
firstName = 123;

// Here we are assigning an array
firstName = [5, 4, 8, 4];

// TypeScript warns us if any value is implicitly any
// Which means we did not defione a type and TS knows that the value can be anything
// so it warns us that we should assigna strict type to it

function returnParam(param) {
  return param;
}

//There is an option to diable this behaviour by setting noImplicitAny: false;
// but we do not want to do this
