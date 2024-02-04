import { Injectable } from '@angular/core';
import {Book} from "./product.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];

  addToCart(book: Book) {
    this.cart.push(book);
  }

  removeFromCart(book: Book) {
    this.cart = this.cart.filter(b => b !== book);
  }

}
