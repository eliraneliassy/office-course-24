import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {BookComponent} from "../book/book.component";
import {CartService} from "../cart.service";
import {FeedService} from "../feed.service";
import {Book} from "../product.interface";
import {Router} from "@angular/router";
import {InfiniteScrollDirective} from "../infinite-scroll.directive";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    BookComponent,
    InfiniteScrollDirective
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit{


  protected cartService = inject<CartService>(CartService);
  protected feedService: FeedService = inject<FeedService>(FeedService);
  protected router = inject(Router);

  books: Book[] = [];


  ngOnInit(): void {
    this.feedService.getBooks('Harry Potter')
      .subscribe((res: Book[]) => this.books = res);


    }


  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

  navigateToProductPage(book: Book){
    this.router.navigateByUrl(`/product/${book.id}`)
  }



}
