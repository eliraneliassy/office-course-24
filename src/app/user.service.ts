import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "./user.interface";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  router = inject(Router);

  getUser(): Observable<User | null> {
    return this.user$.asObservable();
  }

  setUser(user: User) {
    this.user$.next(user);
  }

  login(user: User){
    this.setUser(user);
    this.router.navigateByUrl('/feed');
  }

  logout(){
    this.user$.next(null);
    this.router.navigateByUrl('/login');
  }
}
