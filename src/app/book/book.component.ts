import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit, ChangeDetectionStrategy,
  Component, DoCheck,
  EventEmitter,
  Input, OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Book} from "../product.interface";
import {CurrencyPipe, DatePipe, NgIf} from "@angular/common";
import {DiscountPipe} from "../discount.pipe";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-book',
  standalone: true,
  imports: [NgIf, CurrencyPipe, DatePipe, DiscountPipe, MatCardModule, MatButtonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked, DoCheck, OnDestroy, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
      console.log('NG ON CAHNGES', changes);
  }
  ngAfterContentChecked(): void {
      console.log('After content checked');
  }

  ngOnDestroy(): void {
    console.log('on destory');
  }
  ngAfterViewChecked(): void {
    console.log('After View checked');
  }
  ngAfterContentInit(): void {
    console.log('After content init');
  }

  ngDoCheck(): void {
    console.log('Do Check');
  }
  ngAfterViewInit(): void {
    console.log('After View Init');
  }
  ngOnInit(): void {
    console.log('On Init');
  }

  constructor() {
    console.log('CTOR!');
  }

  @Input({required: true}) book?: Book;
  @Input() itemInCart = false;

  @Output() addToCart: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() removeFromCart: EventEmitter<Book> = new EventEmitter<Book>();

  @Output() imageClicked = new EventEmitter<Book>();


  addToCartHandler(){
    this.addToCart.emit(this.book);
  }

  removeFromCartHanlder(){
    this.removeFromCart.emit(this.book);
  }

  imgaeClickedHanlder() {
    this.imageClicked.emit(this.book);
  }


}
