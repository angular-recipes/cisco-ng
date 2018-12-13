import { Router } from '@angular/router';
import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {
  newBook: Book;
  constructor(
    private bookService: BookService,
    private router: Router  
  ) { }

  ngOnInit() {
    this.newBook = new Book(null, null, null, null);
  }

  addBook() {
    this.newBook.price = +this.newBook.price;
    this.newBook.rating = +this.newBook.rating;
    this.bookService
      .addBook(this.newBook)
      .subscribe( res => this.router.navigate(['/home']));
  }

  // addBook(
  //   title: HTMLInputElement,
  //   author: HTMLInputElement,
  //   price: HTMLInputElement,
  //   rating: HTMLInputElement
  // ) {
  //   let book = new Book(
  //     title.value,
  //     author.value,
  //     +price.value,
  //     +rating.value
  //   );

  //   this.bookService.addBook(book);
    
  //   title.value = '';
  //   author.value = '';
  //   price.value = '';
  //   rating.value = '';
  // }

}
