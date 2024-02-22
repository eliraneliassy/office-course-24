import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {BookComponent} from "../book/book.component";
import {Book} from "../product.interface";
import {CartService} from "../cart.service";
import {RouterOutlet} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    BookComponent,
    RouterOutlet
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy{


  subscription = new Subscription();
  cartService= inject(CartService);

  cart: Book[] = [];

  ngOnInit(): void {
    this.subscription = this.cartService.getCart()
      .subscribe((cart) => this.cart = cart)
  }
  removeFromCart(book: Book) {
    this.cartService.removeFromCart(book);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
