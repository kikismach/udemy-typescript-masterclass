// 1. Class Definition
class Book {
  readonly ISBN: string;
  title: string;
  author: string;
  yearPublished?: number;

  // 2. Constructor Function
  constructor(title: string, author: string, ISBN: string, yearPublished?: number) {
    // 3. This Keyword
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    if (yearPublished) {
      this.yearPublished = yearPublished;
    }
  }
}

// 4. Creating First Class And Instance
const firstBook = new Book("The Great Gatsby", "F. Scott", "1234567890", 1925);
console.log(firstBook);

// 5. Classes as Types
function logBookDetails(book: Book): void {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`ISBN: ${book.ISBN}`);
  if (book.yearPublished) {
    console.log(`Year Published: ${book.yearPublished}`);
  }
}

logBookDetails(firstBook);

// 6. Inheritance With Classes
class EBook extends Book {
  fileSize: number;
  format: string;

  // 7. super Method
  constructor(
    title: string,
    author: string,
    ISBN: string,
    fileSize: number,
    format: string,
    yearPublished?: number
  ) {
    super(title, author, ISBN, yearPublished);
    this.fileSize = fileSize;
    this.format = format;
  }
}

const firstEBook = new EBook("The Great Gatsby", "F. Scott", "1234567890", 2, "PDF", 1925);
console.log(firstEBook);
logBookDetails(firstEBook);
