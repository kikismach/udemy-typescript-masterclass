/**
 ** 1. Static members (fields and methods) belong to the class itself rather than to any instance of the class.
 *
 ** 2. Static members are accessed using the class name, not the instance.
 */

class Counter {
  static count = 0; // Static field

  static increment() {
    // Static method
    Counter.count++;
  }
}

// Static members of a class can be accessed without instantiating the class
Counter.increment();
console.log(Counter.count); // Output: 1

// Static members are not available in the instances of classes
const counter = new Counter();
// Static members cannot be access on the instances of classes, TS throws an error
counter.increment();
