export const User = {
	createUser: (id, name) => {
		return {
			id,
			name,
			status: "active",
		};
	},

	updateUser: (id, user) => {
		return { ...user, id };
	},
};

export class User2 {
	constructor(greeting) {
		this.greeting = greeting;
	}

	createUser(id, name) {
		this.user = { name: name, greeting: this.greeting };
		return this.user;
	}

	showGreeting() {
		console.log(`${this.greeting}, ${this.user.name}`);
	}
}

export class AdminUser extends User2 {
	constructor() {
		super("Greeting to admin");
	}

	showGreeting() {
		console.log(`${this.greeting}, ${this.user.name}`);
	}
}
