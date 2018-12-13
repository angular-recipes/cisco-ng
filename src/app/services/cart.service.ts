import { Item } from './../models/item';
import { Book } from './../models/book';
import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;
  
  constructor() { 
    this.cart = new Cart();
  }

  getCart() {
    return this.cart;
  }

  addToCart(book: Book) {
    let item : Item = this.cart.items.find(i => i.productId == book.id);

    if(item) {
      item.increaseQty();
    } else {
      item = new Item(book.id, book.title, book.price, 1);
      this.cart.items.push(item);
    }

    this.cart.totalPrice += book.price;
    this.cart.totalItems++;
  }

  getTotalCartItems() : number {
    return this.cart.items.reduce( (res, i) => res + i.qty, 0);
  }
}
