class Person {
  // This _age property is for the internal use of the class and not exposed to outside world
  private _age?: number;

  constructor(public firstname: string, public lastname: string) {}

  // I need a better way to set the age of the person
  // The logic needs to be encapsulated inside a method separate from constructor
  public set age(age: number) {
    if (age > 200 || age < 0) {
      throw new Error("The age must be within range of 0-200");
    }
  }

  public fullname() {
    return this.firstname + this.lastname;
  }
}

const john: Person = new Person("John", "Doe");
const mark: Person = new Person("Mark", "Doe");

// Age can nw be set like a property and providing an invalid age will throw an error
john.age = 210;
mark.age = -10;

console.log(john);
console.log(mark);

// Also if I need to combine properties like first and last name
// a method to do so is an ot an elegant solution
console.log(john.fullname());

// Something like john.fullname would be a better option to have
