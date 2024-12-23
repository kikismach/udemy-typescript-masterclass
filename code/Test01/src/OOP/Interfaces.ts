interface IUser {
	name: string;
	email: string;
	login(): void;
}

class Admin implements IUser {
	constructor(public name: string, public email: string, public adminLevel: number) {}

	login(): void {
		console.log("Admin is now logged in");
	}
}

class Customer implements IUser {
	constructor(public name: string, public email: string) {}

	login(): void {
		console.log("Customer is now logged in");
	}
}

class Auth {
	public static login(user: IUser) {
		user.login();
	}
}

const admin: Admin = new Admin("mark", "mark@email.com", 1);
const customer: Customer = new Customer("Josh", "josh@email.com");

Auth.login(admin);
Auth.login(customer);

//-------------------------------------------------------------

interface IPerson {
	name: string;
	email: string;
	age: number;
	phone?: number;
	greet?: () => void;
}

const person: IPerson = {
	name: "John",
	email: "john@email.com",
	age: 32,
};

//-------------------------------------------------------------

interface IUser2 {
	name: string;
	email: string;
	phone: number;
}

interface IUserWithAddress extends IUser2 {
	address: string;
}

const user: IUser2 = {
	name: "john",
	email: "john@email.com",
	phone: 123456,
};

const userWithAddress: IUserWithAddress = {
	name: "john",
	email: "john@email.com",
	phone: 123456,
	address: "Adreeeess",
};

//-------------------------------------------------------------

enum Roles {
	admin = "admin",
	author = "author",
	editor = "editor",
}

interface IRole {
	role: Roles;
}

enum PermissionsList {
	read = "read",
	write = "write",
	execute = "executer",
}

interface IUserPermissions {
	permissions: PermissionsList[];
}

interface IAdminUser extends IUser2, IRole, IUserPermissions {
	numberOfUsersReporting: number;
}

const adminUser: IAdminUser = {
	name: "john",
	email: "john@email.com",
	phone: 123456,
	role: Roles.admin,
	permissions: [PermissionsList.read, PermissionsList.write, PermissionsList.execute],
	numberOfUsersReporting: 4,
};

console.log(adminUser);

//-------------------------------------------------------------

// Generic in Interfaces

enum AutomobileTypes {
	car = "car",
	bus = "bus",
	van = "van",
	truck = "truck",
	bike = "bike",
}

enum AutomobileBrands {
	ferrari = "ferrari",
	honda = "honda",
	bmw = "bmw",
	seat = "seat",
}

enum AutomobileColors {
	red = "red",
	blue = "blue",
	yellow = "yellow",
	black = "black",
	white = "white",
}

interface IAutomobile<Type, Brand, Colors> {
	type: Type;
	brand: Brand;
	colors: Colors[];
	description: string;
}

const ferrari: IAutomobile<AutomobileTypes, AutomobileBrands, AutomobileColors> = {
	type: AutomobileTypes.car,
	brand: AutomobileBrands.ferrari,
	colors: [AutomobileColors.red, AutomobileColors.yellow, AutomobileColors.black],
	description: "It's a Ferrari!!!",
};

const honda: IAutomobile<string, string, string> = {
	type: "car",
	brand: "Honda",
	colors: ["red", "silver"],
	description: "It's a Honda :(",
};

console.log(ferrari);
console.log(honda);

//-------------------------------------------------------------

export interface ISectionTesting {
	init(): void;
}
