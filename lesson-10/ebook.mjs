import { Book } from "./book.mjs";

class Ebook extends Book {
    constructor (bookTitle, bookAuthor, yearPublished, fileFormat) {
        super(bookTitle, bookAuthor, yearPublished);
        this.fileFormat = fileFormat;
    }
    
    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(value) {
        if (typeof value === "string" && value.trim() !== "") {
            this._fileFormat = value;
        } else {
            throw new Error("File format must be a non-empty string.");
        }
    }
    printInfo() {
        const bookInfo = super.bookInfo();
        console.log(`${bookInfo}, File format: ${this.fileFormat}`);
    };

    static bookTransformToEbook(book, fileFormat) {
        return new Ebook(book.bookTitle, book.bookAuthor, book.yearPublished, fileFormat);
    }

};

export { Ebook };