import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user.interface";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";




@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, MatFormFieldModule, MatInputModule, MatButton
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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
