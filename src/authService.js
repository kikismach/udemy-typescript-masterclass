// authService.js
window.AuthService = {
  currentUser: null,

  login(username, password) {
    // Simulate login logic
    if (username === "user" && password === "password123") {
      this.currentUser = { id: 1, username: "user" };
      console.log("Login successful!");
      return true;
    } else {
      console.log("Login failed!");
      return false;
    }
  },

  isLoggedIn() {
    return this.currentUser !== null;
  },
};
