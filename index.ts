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

// We can use Type declarations using Type Alias

type Post = {
  title: string; // Type Annotations using semi-colons instead of commas
  content: string;
  date: Date;
};

let post: Post = {
  title: "This is a blog post",
  content: "Content of the post",
  date: new Date(),
};

let post2: Post = {
  title: "This is a blog post 2",
  content: "Content of the post 2",
  date: new Date(),
};
