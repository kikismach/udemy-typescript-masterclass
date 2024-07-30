/*
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }

  login() {
    console.log(this.name, 'Has logged in');
  }

  logout() {
    console.log(this.name, 'Has logged out');
  }

  addPoint() {
    this.points++;
    console.log('total points', this.points);
  }
}

const user = new User('John', 'john@email.com');

console.log(user);
*/

function User(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;
}

User.prototype.login = function () {
  console.log(this.name, "Has logged in");
};

User.prototype.logout = function () {
  console.log(this.name, "Has logged out");
};

User.prototype.addPoint = function () {
  this.points++;
  console.log("total points", this.points);
};

const user = new User("John", "john@email.com");

console.log(user);
