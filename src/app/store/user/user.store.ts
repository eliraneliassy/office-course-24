import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UserState {
  email: string | null;
}

export function createInitialState(): UserState  {
  return {
    email: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'User' })
export class UserStore extends Store<UserState> {
  constructor() {
    super(createInitialState());
  }
}
