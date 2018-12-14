import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Http } from '@angular/http';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  today: Date;

  constructor(
    private bookService: BookService,
    private cartService: CartService,
    private http: Http
  ) {
  }

  ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe(res => this.books = res.json());

    this.today = new Date();
  }

  rateUp(book: Book) {
    this.bookService.rateUp(book).subscribe();
  }

  rateDown(book: Book) {
    this.bookService.rateDown(book).subscribe();
  }

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

}
