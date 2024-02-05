import {Routes} from '@angular/router';
import {CartComponent} from "./cart/cart.component";
import {FeedComponent} from "./feed/feed.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.component').then(c => c.CartComponent)
  },
  {
    path: 'feed',
    loadComponent: () => import('./feed/feed.component').then(c => c.FeedComponent)
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'product/:id',
    loadComponent: () => import('./product-page/product-page.component').then(c => c.ProductPageComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent)
  }
];
