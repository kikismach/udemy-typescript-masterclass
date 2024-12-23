function returnParams(param: any) {
	return param;
}

// Generic function with the keyword Type
function returnParamsGeneric<Type>(param: Type): Type {
	return param;
}

const result1 = returnParamsGeneric<string>("123");
const result2 = returnParamsGeneric<number>(123);

const myParam: <T>(param: T) => T = (param) => param;

const myParam2 = function <U>(param: U): U {
	return param;
};

type ObjectType = {
	myParam: <V, X>(param: V, param2: X) => V | X;
};

type MyParamType = <K>(param: K) => K;

//-------------------------------------------

// Can be used for any type

type GetfirstElement = <T>(arr: T[]) => T;

const getFirstElement: GetfirstElement = (arr) => {
	return arr[0];
};

const numberArray = [1, 224, 23, 5];
const stringArray = ["a", "v"];

let numberOutput = getFirstElement(numberArray);
let stringOutput = getFirstElement<string>(stringArray);

//-------------------------------------------

// When declare the function need to specify the type of T
// Is used to declare function for specific types

type FirstElement<T> = (arr: T[]) => T;

const firstElementNumber: FirstElement<number> = (arr) => {
	return arr[0];
};

const firstElement: FirstElement<string> = (arr) => {
	return arr[0];
};

let numberOutput2 = firstElementNumber(numberArray);
let stringOutput2 = firstElement(stringArray);

//-------------------------------------------

// Generic and Constraints With Arrays

type HasLength = {
	length: number;
};

function logLength<T extends HasLength>(item: T): void {
	console.log(item.length);
}

logLength(numberArray);
logLength(stringArray);
logLength("Hello world");
//logLength(5); // number don't have length property
logLength({ name: "John", length: 55 });

//-------------------------------------------

let stringNumberPair: KeyValuePair<string, number> = {
	key: "age",
	value: 30,
};

let numberArrayPair: KeyValuePair<number, string[]> = {
	key: 1234,
	value: ["a", "b"],
};

type KeyValuePair<K, V> = {
	key: K;
	value: V;
};

type HasIdProperty = {
	id: number;
};

function printId<T extends HasIdProperty>(obj: T) {
	console.log(obj.id);
}

const user = {
	id: 12345,
	name: "Alice",
};
printId(user);

const product = {
	name: "Laptop",
};
//printId(product); // doesn't have id property

//-------------------------------------------

// keyof Operator

// Create a new type of the union of properties.

type Events = {
	id: number;
	date: Date;
	type: "indoor" | "outdoor";
};

type UnionOfKeysOfEvents = keyof Events; // id | date | type

let idOfEvents: UnionOfKeysOfEvents = "id";
let dateOfEvents: UnionOfKeysOfEvents = "date";

// Index Signature
type Numeric = {
	[key: number]: string;
};

type NumericKeyOf = keyof Numeric;

type PartialEvents = {
	[K in keyof Events]?: Events[K];
};

let partial: PartialEvents = {
	id: 1234,
};

//-------------------------------------------

// Generic Default Values

async function fechData<T>(url: string): Promise<T> {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

async function fetchDefault() {
	const data = await fechData("https://jsonplaceholder.typicode.com/posts/1");
	console.log(data);
}

async function fetchPost() {
	const data = await fechData<Post>("https://jsonplaceholder.typicode.com/posts/1");
	console.log(data);
}

//-------------------------------------------

// Polymorphic Function

const filter = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
	let result: T[] = [];
	for (let i = 0; i < array.length; i++) {
		if (predicate(array[i])) {
			result.push(array[i]);
		}
	}
	return result;
};

function predicateNumber(item: number) {
	return item > 7;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
filter(numbers, predicateNumber);

function predicateCat(item: string) {
	return item === "cat";
}

let animals = ["parrot", "cat", "dog", "elephant"];
filter(animals, predicateCat);

//-------------------------------------------

// Exercise: Implement Map Function

const mapFn = <T, V>(array: T[], func: (item: T) => V): V[] => {
	if (array.length === 0) return [];

	let result: V[] = [];
	for (let i = 0; i < array.length; i++) {
		result.push(func(array[i]));
	}
	return result;
};

let numbersToMap = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const convert = mapFn(numbersToMap, (num) => num.toString());
console.log(convert);

export {};
