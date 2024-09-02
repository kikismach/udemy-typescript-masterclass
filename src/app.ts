// Install a Live server to run this code in a web server environment
// Becuase while fethciong modules Google Chrome treats it as as Cross Origin Request
// And hence will give a CORS error
// If you do not use .js extensions while importing the code will not work in your browser
// will throw error because browser will only see filename without extension and get a 404 error
// Now the Output module can be ESNEXT to be compiles into one file with ESM
// We can get rid of the outFile as well as now modules will work
// Also in index.html you need to enable modules for this to work
import { MathUtils } from "./utils/math-utils";
import { StringUtils } from "./utils/string-utils";

let sum = MathUtils.add(5, 2);
let combined = StringUtils.add("Hello ", "World");

console.log(sum);
console.log(combined);
