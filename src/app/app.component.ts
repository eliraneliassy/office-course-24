import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Book} from "./product.interface";
import {NgFor} from "@angular/common";
import {BookComponent} from "./book/book.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Office Course 24';

  books: Book[] = [
    {
      imageUrl:  'https://wizkids.co.il/cdn/shop/products/76813c8d0218cab5137b190541dce431_x700.gif?v=1514210268',
      title: 'Harry Potter',
      price: 40
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/I/61I24wOsn8L._AC_UF1000,1000_QL80_.jpg',
      title: 'Hunger Games',
      price: 50
    },
    {
      imageUrl: 'https://m.media-amazon.com/images/I/81jAxPkzJHL._AC_UF1000,1000_QL80_.jpg',
      title: 'Shrek',
      price: 100
    }
  ]

  cart: Book[] = [];

  addToCart(book: Book) {
    this.cart.push(book);
  }
}
