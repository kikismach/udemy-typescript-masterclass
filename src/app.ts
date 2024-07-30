/// <reference path="validation/Validation.ts" />
/// <reference path="validation/LettersOnlyValidator.ts" />
/// <reference path="validation/ZipCodeValidator.ts" />
//  there are multiple files involved, we’ll need to make sure all of the compiled code gets loaded. There are two ways of doing this.
// Change the property outFile - to one single file to which all JS needs to be compiled to
// Only works with the AMD and System modules and nothing else

let values = ["Hello", "98052", "101"];

// Now wherever we need to use any of the types declare above in a namespace we need
// to qualify them with the namespace name just like you would access the property of an object
// using the dot notation.

// Doing this we have now assigned a namespce to all our validation types and these names
// now do no exist in the GLOBAL namespace, but are specific to Validation namespace
let validators: { [value: string]: Validation.StringValidator } = {};
validators.zipCode = new Validation.ZipCodeValidator();
validators.letters = new Validation.LettersOnlyValidator();

console.log(validators);

for (let each of values) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(each);
    console.log(`'${each}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
  }
}
