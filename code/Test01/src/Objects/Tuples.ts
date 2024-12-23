let person: (string | number)[] = ["John", "Doe", 23];

let tuplePerson: [string, string, number] = ["John", "Doe", 23];

type User = [string, string, number, string?];

let user: User = ["Jhon", "Doe", 23];
let user2: User = ["Jhon", "Doe", 23, "john.doe@email.com"];

type ListOfStudents = [number, boolean, ...User[]];

let students: User[] = [
  ["John", "Doe", 14],
  ["Mark", "Smith", 15],
  ["John", "Mark", 16, "email@mail.com"],
];

let studentsList = [students.length, false, students];

type NumberBooleansString = [number, ...boolean[], string];
let test:NumberBooleansString = [5, true, true, false, true, false, "heeey"];
let resultBooleans: boolean[] = [true, false, false, true, false, false];
let test2: NumberBooleansString = [resultBooleans.length, ...resultBooleans, "heeeeey"];


// ReadOnly

type ReadOnlyTuple = readonly [string,string,number];
let readonlyPerson: ReadOnlyTuple = ["John", "Doe", 32];
//readonlyPerson[0] = "Mark";


export {};