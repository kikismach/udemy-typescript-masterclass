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

// Declare a new type for Awards
// Initial declaration
// type Awards = {
//   [keyof: string]: {
//     name: string;
//     date: Date;
//   };
// };

type AwardDetails = {
  name: string;
  date: Date;
};

type Awards = {
  [keyof: string]: AwardDetails;
};

type Post = {
  title: string; // Type Annotations using semi-colons instead of commas
  content: string;
  date: Date;
  author: Author; // Assign Author type to author property on Post type
  awards: Awards;
  category?: string;
};

let post: Post = {
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

let post2: Post = {
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
