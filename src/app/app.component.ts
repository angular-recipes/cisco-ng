import { Cart } from './models/cart';
import { CartService } from './services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BooksCart';
  cart: Cart;

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
}
