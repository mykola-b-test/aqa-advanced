import { Book } from "./book.mjs";
import { Ebook } from "./ebook.mjs";


// Subtask 1:Book instances creation
const book1 = new Book("Top of the F1", "Matt Hill", 2024);
const book2 = new Book("8th Miracles", "Sun Tzu", 1997);
const book3 = new Book("National Legends", "St. Vincent", 1986);
book1.printInfo();
book2.printInfo();
book3.printInfo();


// Subtask 2:Ebook instances creation
const ebook1 = new Ebook("The Earth", "Alex Brenks", 1845, "PDF");
const ebook2 = new Ebook("Lord Leen", "J.P. Morgan", 2025, "EPUB");
ebook1.printInfo();
ebook2.printInfo();


// Subtask 4:Oldest book checker
const books = [book1, book2, book3, ebook1, ebook2];
const oldestBook = Book.oldestBook(books);
console.log(oldestBook);


// Subtask 5:Book to Ebook transformation
const transformedEbook = Ebook.bookTransformToEbook(book3, "TXT");
transformedEbook.printInfo();