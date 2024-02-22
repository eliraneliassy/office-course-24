import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {notEliran} from "../not-eliran.validator";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  fb = inject(FormBuilder);

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), notEliran]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z]).{8,}$')])
  });

  register(){
    console.log(this.form);
  }

}
