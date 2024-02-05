import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Book} from "./product.interface";
import {NgFor} from "@angular/common";
import {BookComponent} from "./book/book.component";
import {CartService} from "./cart.service";
import {FeedService} from "./feed.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Office Course 24';


}
