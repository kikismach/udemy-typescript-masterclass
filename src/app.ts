// app.ts
import { AdminUser } from "./user.js";

const userAdmin = new AdminUser();
userAdmin.createUser("Bob");
userAdmin.showGreeting(); // Outputs: "Very special greetings to our VIP, Bob!"
