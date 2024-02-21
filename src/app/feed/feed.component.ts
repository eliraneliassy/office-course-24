import {Component, inject, OnInit} from '@angular/core';
import {BookComponent} from "../book/book.component";
import {CartService} from "../cart.service";
import {FeedService} from "../feed.service";
import {Book} from "../product.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-feed',
  standalone: true,
    imports: [
        BookComponent
    ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit{

  protected cartService = inject<CartService>(CartService);
  protected feedService: FeedService = inject<FeedService>(FeedService);
  protected router = inject(Router);


  ngOnInit(): void {
    this.feedService.getBooks('Harry Potter')
      .subscribe((res: Book[]) => this.books = res);
    }


  books: Book[] = [];

  cart: Book[] = this.cartService.cart;

  addToCart(book: Book) {
    this.cartService.addToCart(book);
    this.cart = this.cartService.cart;
  }

  navigateToProductPage(book: Book){
    this.router.navigateByUrl(`/product/${book.id}`)
  }

}
