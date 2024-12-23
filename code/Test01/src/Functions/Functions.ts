// Named function
function intro(name: string, age: number): string {
	return `My name is ${name} and I am  ${age} years old.`;
}

// Function Expression
const intro2 = function (name: string, age: number): string {
	return `My name is ${name} and I am  ${age} years old.`;
};

// Arrow functions
const intro3 = (name: string, age: number): string => {
	return `My name is ${name} and I am  ${age} years old.`;
};

// Optional Parameters ?
const intro4 = (name: string, age: number, country?: number): string => {
	if (country) {
		return `My name is ${name} and I am  ${age} years old. I am from ${country}`;
	}
	return `My name is ${name} and I am  ${age} years old.`;
};

// Functions Call Signatures
type Person = {
	name: string;
	age: number;
	greet: (greeting: string) => string; // it just declare the type of function
};

const person: Person = {
	name: "Scott",
	age: 30,
	greet: (greeting: string) => {
		return `${greeting} ${name}`;
	},
};

// Never
const neverFunction = (error: string): never => {
	throw new Error(error);
};

// Async Functions - Promise
async function fecthFromDatabase(id: number): Promise<any> {}

const anotherAsyncFunction = async (id: number): Promise<any> => {};

async function returnString(id: number): Promise<string> {
	return Promise.resolve("string");
}

// Rest Parameters and Arguments
function multiplyBy(by: number, ...numbers: number[]) {
	return numbers.map((n) => n * by);
}

// Functions overloading

type Reservation = {
	departureDate: Date;
	returnDate: Date | null;
	departingFrom: string;
	destination: string;
};

type Reserve = {
	(
		departureDate: Date,
		returnDateOrDepartingFrom: Date,
		departingFromOrDestination: string,
		destination: string
	): Reservation | never;
	(departureDate: Date, returnDateOrDepartingFrom: string, departingFromOrDestination: string):
		| Reservation
		| never;
};

const reserve: Reserve = (
	departureDate: Date,
	returnDateOrDepartingFrom: Date | string,
	departingFromOrDestination: string,
	destination?: string
) => {
	if (returnDateOrDepartingFrom instanceof Date && destination) {
		return {
			departureDate,
			returnDate: returnDateOrDepartingFrom,
			departingFrom: departingFromOrDestination,
			destination,
		};
	}
	if (returnDateOrDepartingFrom instanceof String && !destination) {
		return {
			departureDate: departureDate,
			returnDate: null,
			departingFrom: returnDateOrDepartingFrom,
			destination: departingFromOrDestination,
		} as Reservation;
	}
	throw new Error("Please provide valid details to reserve a ticket.");
};

console.log(reserve(new Date(), new Date(), "New York", "Barcelona"));
console.log(reserve(new Date(), "New York", "Barcelona"));

// Examples

function greet(name: string): string {
	return `Hello ${name}!`;
}

type Product = {
	id: number;
	name: string;
};

function getProduct(id: number): Product {
	return {
		id: 1234,
		name: "Crema corporal",
	};
}

type Calculator = (x: number, y: number) => number;

const add: Calculator = (x: number, y: number) => {
	return x + y;
};
const substract: Calculator = (x: number, y: number) => x - y;
const multiply: Calculator = (x: number, y: number) => x * y;

function logMessage(message: string): void {
	console.log(message);
}

function throwError(message: string): never {
	throw new Error("this is an error");
}

export {};
