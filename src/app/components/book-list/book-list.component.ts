import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(
    private bookService: BookService,
    private cartService: CartService  
  ) {
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  rateUp(book: Book) {
    this.bookService.rateUp(book);
  }

  rateDown(book: Book) {
    this.bookService.rateDown(book);
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

}
