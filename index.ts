// As naming convention use Upper Camel Case or also called PascalCase
type StringOrNumber = string | number;
type NumberOrUndefined = number | undefined;
type StringNumberUndefined = string | number | undefined;
type StringOrNull = string | null;
type DateOrUndefined = Date | undefined;
type SymbolOrNull = Symbol | null;

// We will see a better way to make params optional later
// when we talk about functions but for now input can be considered as undefined
// as we are talking about basic union types
function print(input: string | undefined) {
  if (input) {
    console.log(input);
  }
  console.log("Please input something to print");
}
