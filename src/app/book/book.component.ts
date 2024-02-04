import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../product.interface";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgIf],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  @Input({required: true}) book?: Book;

  @Output() addToCart: EventEmitter<Book> = new EventEmitter<Book>();

  addToCartHandler(){
    this.addToCart.emit(this.book);
  }
}