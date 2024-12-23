import { SectionTest } from "../OOP/AbstractClasses.js";
import { add } from "./calculator.js";
import { User, User2, AdminUser } from "./user.js";

export class DeclarationFiles {
	public static init(): void {
		console.log(add(1, 3));
		console.log(add("Hello ", "World"));

		const newUser = User.createUser("abc123", "Mark");
		console.log(newUser);
		console.log(User.updateUser("cba456", newUser));

		const newAdmin = new AdminUser("Hellooooo weeee");
		newAdmin.createUser("abc567", "Bob");
		console.log(newAdmin);

		console.clear();

		console.log(AuthService);

		// Attempt to login using the global AuthService
		if (AuthService.login("user", "password123")) {
			console.log("User is logged in:", AuthService.currentUser);
		} else {
			console.log("Failed to log in.");
		}

		// Check if the user is logged in
		if (AuthService.isLoggedIn()) {
			console.log("User is currently logged in.");
		} else {
			console.log("No user is currently logged in.");
		}

		console.log(window.AuthService);
	}
}
