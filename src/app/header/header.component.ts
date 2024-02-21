import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ChangeColorDirective} from "../change-color.directive";

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
export class HeaderComponent {

  title = 'Office Course 24';

}
