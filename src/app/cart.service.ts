import { Injectable } from '@angular/core';
import {Book} from "./product.interface";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  getCart(): Observable<Book[]> {
    return this.cart$.asObservable();
  }

  addToCart(book: Book) {
    const currentCart = this.cart$.getValue();
    currentCart.push(book);

    this.cart$.next(currentCart);

    // this.cart.push(book);
  }

  removeFromCart(book: Book) {
    let currentCart = this.cart$.getValue();
    currentCart = currentCart.filter(b => b.id!== book.id);

    this.cart$.next(currentCart);
    // this.cart = this.cart.filter(b => b !== book);
  }

}
