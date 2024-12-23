// Mixins are functions that adds properties to an existing class

type Constructor = new (...args: any[]) => {};

function TimeStamp<T extends Constructor>(Base: T) {
	return class extends Base {
		protected timestamp: Date = new Date();

		getTimestamp() {
			return this.timestamp;
		}
	};
}

class User {
	constructor(public name: string) {}
}

class UserWithTimeStamp extends TimeStamp(User) {
	constructor(name: string, public age: number) {
		super(name);
	}

	displayInfo() {
		console.log(`Name: ${this.name}, Age: ${this.age}`);
		console.log(`Timestamp: ${this.timestamp}`);
	}
}

const user: UserWithTimeStamp = new UserWithTimeStamp("Alice", 27);
console.log(user);
user.displayInfo();

export {};
