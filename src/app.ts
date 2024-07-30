interface StringValidator {
  isAcceptable(key: string): boolean;
}
let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
  isAcceptable(value: string) {
    return lettersRegexp.test(value);
  }
}

class ZipCodeValidator implements StringValidator {
  isAcceptable(value: string) {
    return value.length === 5 && numberRegexp.test(value);
  }
}

// Sample values to validate
let values = ["Hello", "98052", "101"];

// Creating new validators
let validators: { [value: string]: StringValidator } = {};
validators.zipCode = new ZipCodeValidator();
validators.letters = new LettersOnlyValidator();

console.log(validators);

// Show whether each string passed each validator
for (let each of values) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(each);
    console.log(`'${each}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
  }
}
