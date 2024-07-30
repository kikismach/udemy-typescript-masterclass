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
