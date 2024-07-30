class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }

  login() {
    console.log(this.name, "Has logged in");
  }

  logout() {
    console.log(this.name, "Has logged out");
  }

  addPoint() {
    this.points++;
    console.log("total points", this.points);
  }
}

const user = new User("John", "john@email.com");
const user2 = new User("Mark", "mark@email.com");

console.log(user);
user2.addPoint();
