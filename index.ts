enum AgeUnit {
  Years = "years",
  Months = "months",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
};

let person: Person = {
  name: "Scott",
  age: 30,
  ageUnit: AgeUnit.Years,
  country: "USA",
};

function convertAgeToMonths(person: Person): Person {
  if (person.ageUnit === AgeUnit.Years) {
    person.age = person.age * 12;
    person.ageUnit = AgeUnit.Months;
  }
  return person;
}

console.log(convertAgeToMonths(person));
