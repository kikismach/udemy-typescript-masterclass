// An array can be converted into readonly using the readopnly keyword
let number: readonly number[] = [1, 2, 3];

// Once an array is readonly no values can be added or removed from an array
number.push(1);

// A tuple can be read only also
type ReadOnlyTuple = readonly [string, string, number];

// For our example let's create a new Tuple which is readonly
type ReadOnlyPerson = readonly [string, string, number];

// Creating a new readonly person
const person: ReadOnlyPerson = ["John", "Smith", 32];

//  There are some alternavite syntax for creating Readonly Arrays
type a = Readonly<string[]>;
type b = ReadonlyArray<string>;

//  Alternative syntax for Readonly Tuple
type c = Readonly<[string, string, number]>;
