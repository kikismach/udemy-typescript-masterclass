function printHello() {
  console.log("Hello World");
}

// !To make this work target needs to be minimum Node16
// Cannot target ESM with this syntax
// Only NodeJs supports both CJS and ESM modules combined and that too only Node16
// Can a CommonJS module require an ES module? CommonJS isn’t part of the ECMAScript specification, so runtimes, bundlers, and transpilers have been free to make up their own answers to these questions since ESM was standardized in 2015, and as such no standard set of interoperability rules exist.
// SO TS follows that and these interoperatability rules have been mentioned on the website
// https://www.typescriptlang.org/docs/handbook/modules/theory.html#esm-and-cjs-interoperability
export = printHello;
