import {inject, Injectable} from '@angular/core';
import {User} from "./user.interface";
import {Router} from "@angular/router";
import {UserState, UserStore} from "./store/user/user.store";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  router = inject(Router);
  userStore = inject(UserStore);



  setUser(user: User) {
    // this.user$.next(user);
    this.userStore
      .update((userstate: UserState) => ({...userstate, email: user.email}))
  }

  login(user: User){
    this.setUser(user);
    this.router.navigateByUrl('/feed');
  }

  logout(){
    this.userStore.update((state: UserState) => ({...state, email: null}))
    this.router.navigateByUrl('/login');
  }
}
