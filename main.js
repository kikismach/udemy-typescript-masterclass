// method -> object
// function -> window, global

const book = {
  title: "The Title",
  authors: ["John", "Mark", "Rob"],
  read() {
    console.log(this);
  },

  printAuthors() {
    this.authors.forEach((author) => {
      console.log(this.title, " - ", author);
    });
  },
};

book.printAuthors();
