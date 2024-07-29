// We can declare a separate type for the constructor to get rid of the confusion
type Constructor = new (...args: any[]) => {};

// A mixin function that adds timestamp functionality
function Timestamp<TBase extends Constructor>(Base: TBase) {
  // The function returns a new class that extends the passed Base class
  return class extends Base {
    protected timestamp: Date = new Date();

    getTimestamp() {
      return this.timestamp;
    }
  };
}

// Base User class
class User {
  constructor(public name: string) {}
}

// Composing the final class using mixins
class UserWithTimestamp extends Timestamp(User) {
  constructor(name: string, public age: number) {
    super(name);
  }

  // Since timestamp is protected we can declare a displayInfor method to
  // display the required information
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    console.log(`Timestamp: ${this.getTimestamp()}`); // Call method from Timestamp mixin
  }
}

const user = new UserWithTimestamp("Alice", 30);
user.displayInfo();
