import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  addBook(
    title: HTMLInputElement,
    author: HTMLInputElement,
    price: HTMLInputElement,
    rating: HTMLInputElement
  ) {
    let book = new Book(
      title.value,
      author.value,
      price.value,
      +rating.value
    );

    this.bookService.addBook(book);
    
    title.value = '';
    author.value = '';
    price.value = '';
    rating.value = '';
  }

}
