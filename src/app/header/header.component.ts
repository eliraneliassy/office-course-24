import {ChangeDetectionStrategy, Component, DoCheck, inject, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ChangeColorDirective} from "../change-color.directive";
import {CartService} from "../cart.service";
import {UserService} from "../user.service";
import {User} from "../user.interface";
import {map, Observable} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {Book} from "../product.interface";
import {UserQuery} from "../store/user/user.query";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ChangeColorDirective,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {


  title = 'Office Course 24';

  cartService = inject(CartService);

  numberOfItems$?: Observable<number>;

  userService = inject(UserService);

  // user$?: Observable<User | null>;
  userQuery = inject(UserQuery);
  userEmail$ = this.userQuery.selectEmail$;

  ngOnInit(): void {
    this.numberOfItems$ = this.cartService.getCart()
      .pipe(
        map((cart: Book[]) => cart.length)
      );
    // this.user$ = this.userService.getUser();
  }

  logout(){
    this.userService.logout();
  }


}
