// primitive types that reflect the absence of a value

// Undefined values
let user: undefined;
console.log(user);

// null values
let userRole: null;
// Using user role before defining it throws an error with TS
//! console.log(userRole);
// Hence define it first
userRole = null;
console.log(userRole);

// null and undefined are not the same
console.log(userRole === user);

// Even though used interchangebly by JS developers in conditions
if (!userRole) {
  console.log("The condition is true");
}

if (!user) {
  console.log("The condition is true");
}
