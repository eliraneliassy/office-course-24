import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {CartState, CartStore} from "./cart.store";
import {map} from "rxjs";
import {Book} from "../../product.interface";



@Injectable({ providedIn: 'root' })
export class CartQuery extends Query<CartState> {

  selectCart$ = this.select('cart');
  selectNumOfItemsInCart$ = this.selectCart$.pipe(
    map((cart: Book[]) => cart.length)
  );

  constructor(protected override store: CartStore) {
    super(store);
  }
}
