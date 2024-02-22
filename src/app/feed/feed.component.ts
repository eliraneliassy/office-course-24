import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {BookComponent} from "../book/book.component";
import {CartService} from "../cart.service";
import {FeedService} from "../feed.service";
import {Book} from "../product.interface";
import {Router} from "@angular/router";
import {InfiniteScrollDirective} from "../infinite-scroll.directive";
import {Observable, Subscription} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    BookComponent,
    InfiniteScrollDirective,
    AsyncPipe
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedComponent implements OnInit {


  protected cartService = inject<CartService>(CartService);
  protected feedService: FeedService = inject<FeedService>(FeedService);
  protected router = inject(Router);
  protected cdr = inject(ChangeDetectorRef);

  books$?: Observable<Book[]>;


  ngOnInit(): void {
    this.books$ = this.feedService.getBooks('Harry Potter')
  }


  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }

  navigateToProductPage(book: Book) {
    this.router.navigateByUrl(`/product/${book.id}`)
  }


}
