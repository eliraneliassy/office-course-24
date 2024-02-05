import {Routes} from '@angular/router';
import {CartComponent} from "./cart/cart.component";
import {FeedComponent} from "./feed/feed.component";
import {ProductPageComponent} from "./product-page/product-page.component";

export const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: 'full'
  },
  {
    path: 'product/:id',
    component: ProductPageComponent
  }
];
