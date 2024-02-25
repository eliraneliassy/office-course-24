import {inject, Injectable} from '@angular/core';
import {Book} from "./product.interface";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {CartState, CartStore} from "./store/cart/cart.store";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartStore = inject(CartStore);
  addToCart(book: Book) {
    // const currentCart = this.cart$.getValue();
    // currentCart.push(book);
    //
    // this.cart$.next(currentCart);

    // this.cart.push(book);

    this.cartStore.update((currentState: CartState) => ({
      ...currentState, cart: [...currentState.cart, book]
    }))

    // EQUAL TO LINE 19
    // this.cartStore.update((currentState: CartState) => {
    //   return {
    //     ...currentState, cart: [...currentState.cart, book]
    //   }
    // })
  }

  removeFromCart(book: Book) {
    // let currentCart = this.cart$.getValue();
    // currentCart = currentCart.filter(b => b.id!== book.id);
    //
    // this.cart$.next(currentCart);
    // this.cart = this.cart.filter(b => b !== book);

    this.cartStore.update((currentState: CartState) => {
      const newCart = currentState.cart.filter(b => b !== book);
      return {...currentState, cart: newCart}
    })
  }

}
