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
  bs: BookService;

  constructor(bookService: BookService) {
    this.bs = bookService;
  }

  ngOnInit() {
    this.books = this.bs.getBooks();
  }

  rateUp(i: number) {
    this.bs.rateUp(i);
  }

  rateDown(i: number) {
    this.bs.rateDown(i);
  }

}
