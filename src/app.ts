/** 
 * 
 As we add more validators, we’re going to want to have some kind of organization scheme so that we can keep track of our types and not worry about name collisions with other objects. Instead of putting lots of different names into the global namespace, let’s wrap up our objects into a namespace.
 */

// Lets add all our validation logic inside a namespace called Validation
namespace Validation {
  // Since interface is used outside the code we need to export it
  export interface StringValidator {
    isAcceptable(key: string): boolean;
  }

  // We do not need to export the constants because they are not used
  // By out code outside of the namespace they are implementation details
  let lettersRegexp = /^[A-Za-z]+$/;
  let numberRegexp = /^[0-9]+$/;

  // Since class is used outside the code we need to export it
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(value: string) {
      return lettersRegexp.test(value);
    }
  }

  // Since class is used outside the code we need to export it
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(value: string) {
      return value.length === 5 && numberRegexp.test(value);
    }
  }
}

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
