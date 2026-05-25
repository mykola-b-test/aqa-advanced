
class Book {
    constructor(bookTitle, bookAuthor, yearPublished) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.yearPublished = yearPublished;
    }

    get bookTitle() {
        return this._bookTitle;
    }
    set bookTitle(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this._bookTitle = value;
        } else {
            throw new Error('Book title must be a non-empty string.');
        }
    }

    get bookAuthor() {
        return this._bookAuthor;
    }
    set bookAuthor(value) {
        if (typeof value === 'string' && value.trim() !== '') {
            this._bookAuthor = value;
        } else {
            throw new Error('Book author must be a non-empty string.');
        }
    }

    get yearPublished() {
        return this._yearPublished;
    }
    set yearPublished(value) {
        if (typeof value === 'number' && value > 0) {
            this._yearPublished = value;
        } else {
            throw new Error('Year of publication must be a positive number.');
        }
    }
    printInfo() {
        const bookInfo = `Book Title: ${this.bookTitle}, Book Author: ${this.bookAuthor}, Year of publication: ${this.yearPublished}`;
        console.log(bookInfo);
        return bookInfo;
    }
    bookInfo() {
        return `Book Title: ${this.bookTitle}, Book Author: ${this.bookAuthor}, Year of publication: ${this.yearPublished}`;
    }

    // static oldestBook(books) {
    //     let oldestBook = books[0];
    //     for (const item of books) {
    //         if (item.yearPublished < oldestBook.yearPublished) {
    //             oldestBook = item;
    //         }
    //     }
    //     return oldestBook;
    // }

    static oldestBook(books) {
        let oldestBook = books.reduce((oldest, current) => {
            return current.yearPublished < oldest.yearPublished ? current : oldest;
        }, books[0]);
        return oldestBook;
    }
};

export { Book };