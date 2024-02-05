import {Routes} from '@angular/router';
import {CartComponent} from "./cart/cart.component";
import {FeedComponent} from "./feed/feed.component";

export const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  }
];
