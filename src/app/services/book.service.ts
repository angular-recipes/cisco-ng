import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];

  constructor() {
    this.books = [
      new Book(1, 'The Alchemist', 'Paulo Cohelo', 23, 4),
      new Book(2, 'Five point someone', 'Chetan Bhagat', 12, 2),
      new Book(3, 'The monk who sold his ferrari', 'Robin Sharma', 19, 3),
      new Book(4, '4 hour work week', 'Tim Ferris', 34, 5)
    ];
  }

  getBooks(): Book[] {
    return this.books;
  }

  getBook(bookId: number) : Book {
    return this.books.find(b => b.id == bookId);
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
  }
}
