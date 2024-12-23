class User {
	public name: string;
	readonly email: string;
	lastname?: string;

	constructor(name: string, email: string, lastname?: string) {
		this.name = name;
		this.email = email;
		this.lastname = lastname;
	}

	greet() {
		return `Hello ${this.name}`;
	}
}

class User2 {
	// setting the Access Modifier in the constructor, creates the properties with the get and set.
	constructor(public name: string, public readonly email: string, public lastname?: string) {}

	greet() {
		return `Hello ${this.name}`;
	}
}

class Admin extends User {
	isAdmin: boolean = true;
	usersOnCharge: number;

	constructor(name: string, email: string, usersOnCharge: number, lastname?: string) {
		super(name, email, lastname);
		this.usersOnCharge = usersOnCharge;
	}

	printName() {
		console.log(this.name);
	}

	greet() {
		return `Hello ${this.name}, I am an Admin!!`;
	}
}

const user = new User("John", "john@email.com");
const admin: Admin = new Admin("Mark", "mark@email.com", 4);

console.log(user);
console.log(user.greet());
console.log(admin);
console.log(admin.greet());

console.log(user.name);

//--------------------------------------------

class Book {
	title: string;
	author: string;
	yearPublished?: number;
	readonly isbn: string;

	constructor(title: string, author: string, isbn: string, yearPublished?: number) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
		this.yearPublished = yearPublished;
	}
}

const myBook = new Book("The Great Gasby", "F. Scott", "abc-12345", 2021);
console.log(myBook);

function logBookDetails(book: Book): void {
	console.log(`Title: ${book.title}`);
	console.log(`Author: ${book.author}`);
	console.log(`ISBN: ${book.isbn}`);
	if (book.yearPublished) console.log(`Year Published: ${book.yearPublished}`);
}
logBookDetails(myBook);

class EBook extends Book {
	fileSize: number;
	format: string;

	constructor(
		title: string,
		author: string,
		isbn: string,
		fileSize: number,
		format: string,
		yearPublished?: number
	) {
		super(title, author, isbn, yearPublished);
		this.fileSize = fileSize;
		this.format = format;
	}
}

const myEbook = new EBook("The Great Gasby", "F. Scott", "abc-12345", 5793, "pdf", 2021);
console.log(myEbook);
logBookDetails(myEbook);

//--------------------------------------------

class Person {
	public fullname: string;
	constructor(public firstName: string, public lastName: string, public age: number) {
		if (age > 120 || age < 0) {
			throw new Error("The age must be within the age range 0-120");
		}
		this.fullname = `${this.firstName} ${this.lastName}`;
	}
}

const john: Person = new Person("John", "Doe", 210);
const mark: Person = new Person("Mark", "Smith", -10);

//--------------------------------------------

// Mutator - Setters => set
// Accesors - Getters => get

class Person2 {
	constructor(public firstName: string, public lastName: string, age: number) {
		this.age = age;
	}

	// Setter
	private _age?: number;
	public set age(value: number) {
		if (value > 120 || value < 0) {
			throw new Error("The age must be within the age range 0-120");
		}
		this._age = value;
	}

	public get age(): number {
		if (!this._age) {
			throw new Error("The age property its undefined.");
		}
		return this._age;
	}

	public get fullname(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

const john2: Person2 = new Person("John", "Doe", 210);
const mark2: Person2 = new Person("Mark", "Smith", -10);

//--------------------------------------------

// Static Members

class Counter {
	static count = 0;

	static increment() {
		this.count++;
	}

	// Block that initialize as soon the class is used.
	static {
		console.log("initializing Counter Class");
		this.count = 4;
	}
}

console.log(Counter.count);
Counter.increment();
console.log(Counter.count);

//--------------------------------------------

// Generic in classes

class Box<T> {
	private _value: T;

	constructor(value: T) {
		this._value = value;
	}

	get value(): T {
		return this._value;
	}

	set value(newValue: T) {
		this.value = newValue;
	}
}

const numberBox = new Box<number>(123);
const numberBox2 = new Box(123);

//--------------------------------------------

// Generic in classes - Use Case
type Identificable = {
	id: number;
};

class Repository<T extends Identificable> {
	private items: T[] = [];

	add(item: T) {
		this.items.push(item);
	}

	getById(id: number): T | undefined {
		return this.items.find((item) => item.id === id);
	}

	getAll(): T[] {
		return this.items;
	}

	delete(id: number): void {
		this.items = this.items.filter((item) => item.id !== id);
	}
}

type UserRep = {
	id: number;
	name: string;
	email: string;
};

const userRepository = new Repository<UserRep>();
userRepository.add({ id: 1, name: "John", email: "john@email.com" });
console.log(userRepository.getById(2));
console.log(userRepository.getAll());
userRepository.delete(2);
userRepository.delete(1);

//--------------------------------------------

// Exercise

class Employee {
	static companyName: string = "Tech solutions";

	constructor(
		public name: string,
		public age: number,
		private _salary: number,
		protected id: number
	) {}

	get salary(): number {
		return this._salary;
	}

	set salary(value: number) {
		if (value < 0) throw new Error("The salary must be a positive");
		this._salary = value;
	}

	public static getCompanyName(): string {
		return this.companyName;
	}

	getDetails(): string {
		return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Id: ${this.id},`;
	}
}

class Manager extends Employee {
	constructor(name: string, age: number, salary: number, id: number, public department: string) {
		super(name, age, salary, id);
	}

	getDetails(): string {
		return super.getDetails() + `, Department: ${this.department}`;
	}
}

const employee = new Employee("Alice", 25, 4500, 1);
const manager = new Manager("George", 32, 9500, 1, "IT");
console.log(employee.getDetails());
console.log(manager.getDetails());

export default {};
