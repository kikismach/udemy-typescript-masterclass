"use strict";
// A post can be strictly typed using type annotations
// let post: {
//   title: string; // Type Annotations using semi-colons instead of commas
//   content: string;
//   date: Date;
// } = {
//   title: "This is a blog post",
//   content: "Content of the post",
//   date: new Date(),
// };
let post = {
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
};
// Advantage of type declaration, can use the same type again for a new object
let post2 = {
    title: "This is a blog post 2",
    content: "Content of the post 2",
    date: new Date(),
};
