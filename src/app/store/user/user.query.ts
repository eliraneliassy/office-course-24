import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {UserState, UserStore} from "./user.store";


@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<UserState> {

  selectEmail$ = this.select('email')
  constructor(protected override store: UserStore) {
    super(store);
  }
}
