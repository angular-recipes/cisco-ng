import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books : Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('The Alchemist', 'Paulo Cohelo', 23, 4),
      new Book('Five point someone', 'Chetan Bhagat', 12, 2),
      new Book('The monk who sold his ferrari', 'Robin Sharma', 19, 3),
      new Book('4 hour work week', 'Tim Ferris', 34, 5)
    ];
  }

}
