class Employee {
  static companyName: string = "Tech Solutions Inc."; // Static member

  constructor(
    public name: string, // Public member using shorthand for constructor
    public age: number, // Public member using shorthand for constructor
    private _salary: number, // Private member
    protected id: number // Protected member
  ) {}

  // Getter for salary
  get salary(): number {
    return this._salary;
  }

  // Setter for salary
  set salary(newSalary: number) {
    if (newSalary > 0) {
      this._salary = newSalary;
    } else {
      throw new Error("Salary must be a positive number");
    }
  }

  // Static method to get company name
  static getCompanyName(): string {
    return Employee.companyName;
  }

  // Method to get employee details
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    age: number,
    salary: number,
    id: number,
    public department: string // Public member using shorthand for constructor
  ) {
    super(name, age, salary, id);
  }

  // Overriding getDetails method to include department information
  getDetails(): string {
    return `${super.getDetails()}, Department: ${this.department}`;
  }
}

// Example usage
const emp1 = new Employee("Alice", 30, 50000, 1);
console.log(emp1.getDetails()); // Output: Name: Alice, Age: 30, Salary: 50000

const manager1 = new Manager("Bob", 40, 70000, 2, "Engineering");
console.log(manager1.getDetails()); // Output: Name: Bob, Age: 40, Salary: 70000, Department: Engineering

console.log(Employee.getCompanyName()); // Output: Tech Solutions Inc.
