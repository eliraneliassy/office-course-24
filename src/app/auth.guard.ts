import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "./user.interface";
import {map, Observable, of} from "rxjs";
import {UserQuery} from "./store/user/user.query";

export const authGuard: CanActivateFn = (route, state) => {
  // const userService = inject(UserService);
  const router = inject(Router);

  const userQuery = inject(UserQuery);

  return userQuery.selectEmail$
    .pipe(
      map((user: string | null) => {
        if(user) {
          return true;
        }
        return router.createUrlTree(['/login'])
      })
    )





};
