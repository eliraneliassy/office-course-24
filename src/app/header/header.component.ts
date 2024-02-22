import {Component, DoCheck, inject, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ChangeColorDirective} from "../change-color.directive";
import {CartService} from "../cart.service";
import {UserService} from "../user.service";
import {User} from "../user.interface";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ChangeColorDirective
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {


  title = 'Office Course 24';

  cartService = inject(CartService);

  numberOfItems = 0;

  userService = inject(UserService);

  user: User | null = null;

  ngOnInit(): void {
    this.cartService.getCart()
      .subscribe((cart) => this.numberOfItems = cart.length)

    this.userService.getUser().subscribe((user) => this.user = user)
  }

  logout(){
    this.userService.logout();
  }


}
