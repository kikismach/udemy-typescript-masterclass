export namespace User {
	interface IUserProfile {
		id: string;
		name: string;
		status: "active" | "inactive";
	}

	function createUser(id: string, name: string): IUserProfile;

	function updateUser(id: string, user: IUserProfile): IUserProfile;
}

export declare class User2 {
	greeting: string;
	user: {
		name: string;
		greeting: string;
	};

	constructor(greeting: string);

	createUser(id: string, name: string): { name: string; greeting: string };

	showGreeting(): void;
}

export declare class AdminUser extends User2 {}
