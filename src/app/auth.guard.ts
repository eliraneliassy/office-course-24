import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "./user.interface";
import {map, Observable, of} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  return userService.getUser()
    .pipe(
      map((user: User | null) => {
        if(user) {
          return true;
        }
        return router.createUrlTree(['/login'])
      })
    )





};
