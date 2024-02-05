import {Component, inject} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  router = inject(Router);

  login(form: NgForm) {
    console.log(form);
    this.router.navigateByUrl('feed');

  }

}
