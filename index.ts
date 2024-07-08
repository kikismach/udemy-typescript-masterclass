// At times there are functions which do not return anything
// this function does not return anything
// Hence for rerturn type we can use a special TypeScript type called void
function writeToDatabase(value: string): void {
  console.log("Writing to database:", value);
}

// This is different from void because this function never completes execution
function throwError(error: string): never {
  throw new Error(error);
}

// We check these types and hence void can be used in place of never but not visa versa
type check = never extends void ? true : false;
type checks = void extends never ? true : false;
