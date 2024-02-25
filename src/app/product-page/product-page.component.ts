import {ChangeDetectionStrategy, Component, Inject, inject, Optional} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FeedService} from "../feed.service";
import {Book} from "../product.interface";
import {BookComponent} from "../book/book.component";
import {Observable, switchMap} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatDialogModule} from "@angular/material/dialog";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    BookComponent,
    AsyncPipe,
    MatDialogModule

  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPageComponent {

  route = inject(ActivatedRoute);
  feedService = inject(FeedService);

  book$?: Observable<Book | undefined>;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {


  console.log('dialog data: ,',  this.data);
    // console.log(this.route.snapshot.params)
    this.book$ = this.route.params
      .pipe(
        switchMap((params: Params) =>
          this.feedService.getBookById('Harry Potter', params['id']))

      )
    //   .subscribe((params: Params) => {
    //   this.feedService.getBookById('Harry Potter', params['id'])
    //     .subscribe((book: Book | undefined) => this.book = book)
    // });
  }

}
