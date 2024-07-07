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

// Better to declare a separate type for Author
type Author = {
  name: string;
  age: number;
  email: string;
};

type Post = {
  title: string; // Type Annotations using semi-colons instead of commas
  content: string;
  date: Date;
  author: Author; // Assign Author type to author property on Post type
};

let post: Post = {
  title: "This is a blog post",
  content: "Content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 32,
    email: "john@doe.com",
  },
};
