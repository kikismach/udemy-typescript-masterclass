/** 
 * 
 * ! Key Differences Between Static Blocks and Constructor Methods
** Purpose:

Static Blocks: Used for one-time class-level initialization. They can set static properties and perform any setup that should happen once when the class is loaded.
Constructor Methods: Used for instance-level initialization. They set up instance properties and perform any setup needed each time an instance of the class is created.

** Scope:
Static Blocks: Operate at the class level. They cannot directly access or initialize instance properties since they run before any instances are created.
Constructor Methods: Operate at the instance level. They can access and initialize instance properties using the this keyword.

** Execution Timing:
Static Blocks: Executed once when the class is first loaded and defined, before any instances are created.
Constructor Methods: Executed each time a new instance of the class is created.

** Access:
Static Blocks: Can access and modify static properties and call static methods.
Constructor Methods: Can access and modify instance properties and methods, and can also access static properties and methods using the class name.
 * 
 */

class Counter {
  static count = 0; // Static field

  static increment() {
    // Static method
    Counter.count++;
  }

  static {
    // Static block
    console.log("Initializing Counter class");
    const initialCount = Counter.loadInitialCount();
    Counter.count = initialCount;
  }

  static loadInitialCount(): number {
    // Simulate loading initial count from an external source
    // This is a simulation of data that is coming from an outside source like an external API
    // This method could be inside as well as outside the class
    return 5;
  }
}

// The month the class is first Initialized with static members the static block triggers
// Which sets the initial count value of the class to 5
console.log(Counter.count); // Output: 5

// Then we can increment the count value and print it once again
Counter.increment();
console.log(Counter.count); // Output: 6
