"use strict";
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["Years"] = "years";
    AgeUnit["Months"] = "months";
})(AgeUnit || (AgeUnit = {}));
let person = {
    name: "Scott",
    age: 30,
    ageUnit: AgeUnit.Years,
    country: "USA",
};
function convertAgeToMonths(person) {
    if (person.ageUnit === AgeUnit.Years) {
        person.age = person.age * 12;
        person.ageUnit = AgeUnit.Months;
    }
    return person;
}
console.log(convertAgeToMonths(person));
