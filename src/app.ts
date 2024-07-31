import { User } from "./user.js";

const newUser: User.UserProfile = User.createUser(1, "John Doe");
const updatedUser: User.UserProfile = User.updateUser(1, {
  id: 1,
  name: "Johnny Doe",
  status: "active",
});

console.log(newUser);
console.log(updatedUser);
