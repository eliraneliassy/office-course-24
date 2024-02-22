import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "./user.interface";
import {Observable} from "rxjs";

export const authGuard: CanActivateFn = (route, state): Observable<Boolean> => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.getUser()



};
