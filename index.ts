// Declare a type for the Dog
type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

// Declare a type for the Cat
type Cat = {
  name: string;
  purrs: boolean;
};

// Create a new type which is a union of Dog and Cat
type DogAndCatUnion = Dog | Cat;

// All Dog properties
let dog: DogAndCatUnion = {
  name: "Buddy",
  barks: true,
  wags: true,
};

// All Cat properties
let cat: DogAndCatUnion = {
  name: "Bella",
  purrs: true,
};

// All Dog and partial cat properties
let dogAndCat: DogAndCatUnion = {
  name: "Hybrid",
  barks: true,
  wags: true,
  purrs: true,
};

// Cannot contain partial Properties of one of the types
let partialDog: DogAndCatUnion = {
  name: "Hybrid",
  barks: true,
};
