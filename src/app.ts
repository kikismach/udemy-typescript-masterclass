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
