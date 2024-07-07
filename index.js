"use strict";
// One of having nested objects
// type Post = {
//   title: string; // Type Annotations using semi-colons instead of commas
//   content: string;
//   date: Date;
//   author: {
//     name: string;
//     age: number;
//     email: string;
//   };
// };
let post = {
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
    category: "javascript",
    author: {
        name: "John",
        age: 32,
        email: "john@doe.com",
    },
    awards: {
        web: {
            name: "Wed Awards",
            date: new Date(),
        },
        web3: {
            name: "Web 3",
            date: new Date(),
        },
    },
};
let post2 = {
    title: "This is a blog post",
    content: "Content of the post",
    date: new Date(),
    author: {
        name: "John",
        age: 32,
        email: "john@doe.com",
    },
    awards: {
        web: {
            name: "Wed Awards",
            date: new Date(),
        },
    },
};
