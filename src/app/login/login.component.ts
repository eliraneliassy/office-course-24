import {Component, inject} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user.interface";

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
  userService = inject(UserService);

  login(form: NgForm) {
    console.log(form);
    const user: User = {
      email: form.value.email
    }
    this.userService.login(user);

  }

}
