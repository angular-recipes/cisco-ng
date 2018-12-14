import { Book } from './../../models/book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-book-item',
  animations: [
    trigger('bgChange', [
      state('high', style({
        backgroundColor: 'bisque'
      })),
      state('low', style({
        backgroundColor: 'white'
      })),
      transition('low => high', [
        animate('0.5s')
      ]),
      transition('high => low', [
        animate('0.3s')
      ])
    ])
  ],
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Output() rateUpBtnClick = new EventEmitter();
  @Output() rateDownBtnClick = new EventEmitter();
  @Output() addToCartBtnClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.book);
  }

  handleRateUpBtnClick() {
    this.rateUpBtnClick.emit(this.book);
  }

  handleRateDownBtnClick() {
    this.rateDownBtnClick.emit(this.book);
  }

  handleAddToCartBtnClick() {
    this.addToCartBtnClick.emit(this.book);
  }





}
