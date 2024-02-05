import {Component, inject} from '@angular/core';
import {BookComponent} from "../book/book.component";
import {Book} from "../product.interface";
import {CartService} from "../cart.service";
import {RouterOutlet} from "@angular/router";

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
export class CartComponent {

  cartService= inject(CartService);

  cart: Book[] = this.cartService.cart;
  removeFromCart(book: Book) {
    this.cartService.removeFromCart(book);
  }


}
