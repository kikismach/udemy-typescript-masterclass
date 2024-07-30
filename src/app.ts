// Install a Live server to run this code in a web server environment
// Becuase while fethciong modules Google Chrome treats it as as Cross Origin Request
// And hence will give a CORS error
// If you do not use .js extensions while importing the code will not work in your browser
// will throw error because browser will only see filename without extension and get a 404 error
import { LettersOnlyValidator } from "./validation/LettersOnlyValidator.js";
import { StringValidator } from "./validation/Validation.js";
import { ZipCodeValidator } from "./validation/ZipCodeValidator.js";
// Now the Output module can be ESNEXT to be compiles into one file with ESM
// We can get rid of the outFile as well as now modules will work
// Also in index.html you need to enable modules for this to work

let values = ["Hello", "98052", "101"];

// Get rid of the Validation prefix
let validators: { [value: string]: StringValidator } = {};
validators.zipCode = new ZipCodeValidator();
validators.letters = new LettersOnlyValidator();

console.log(validators);

for (let each of values) {
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(each);
    console.log(`'${each}' ${isMatch ? "matches" : "does not match"} '${name}'.`);
  }
}
