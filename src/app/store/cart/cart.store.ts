import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {Book} from "../../product.interface";

export interface CartState {
  cart: Book[]
}

export function createInitialState(): CartState  {
  return {
    cart: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Cart' })
export class CartStore extends Store<CartState> {
  constructor() {
    super(createInitialState());
  }
}
