// value -> The value of the property
// writable (boolean) -> whether this property in question is writable or not
// enumerable (boolean)  -> whether you can enumerate or loop through this property or not
// configurable (boolean) -> The configurable property tells whether the user has permission
//								           to change property descriptor such as to change the value of
//                           writable and enumerable settings.

const book = {
  title: "the title",
  pages: 300,
  author: "John",
};

console.log(Object.getOwnPropertyDescriptors(book));
