import { Book } from './../../models/book';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    let bookId = +this.route.snapshot.paramMap.get('bookId');
    this.bookService
      .getBook(bookId)
      .subscribe(res => this.book = res.json());
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
