import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {BookComponent} from "../book/book.component";
import {Book} from "../product.interface";
import {CartService} from "../cart.service";
import {RouterOutlet} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    BookComponent,
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit{

  cartService= inject(CartService);

  cart$?: Observable<Book[]>

  ngOnInit(): void {
    this.cart$ = this.cartService.getCart();
  }
  removeFromCart(book: Book) {
    this.cartService.removeFromCart(book);
  }



}
