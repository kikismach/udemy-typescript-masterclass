enum AgeUnit {
  Years = "years",
  Months = "months",
}

// Greeting can be defined as a type as well
type GreetingFunction = (greeting: string /* can have additional params */) => string;

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
  // greet: Function;
  greet: GreetingFunction;
};

let person: Person = {
  name: "Scott",
  age: 30,
  ageUnit: AgeUnit.Years,
  country: "USA",
  greet: (greeting) => {
    return `${greeting} ${person.name}`;
  },
};

function convertAgeToMonths(person: Person): Person {
  if (person.ageUnit === AgeUnit.Years) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.Months;
  }
  return person;
}

console.log(convertAgeToMonths(person));
console.log(person.greet("Hello"));
