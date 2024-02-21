import {AbstractControl, ValidationErrors} from "@angular/forms";

export function notEliran(control: AbstractControl): ValidationErrors | null {
  if (control.value === 'Eliran') {
    return {'forbidenName': 'Eliran'}
  }

  return null;
}
