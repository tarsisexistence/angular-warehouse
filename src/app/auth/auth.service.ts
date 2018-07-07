import { Injectable } from '@angular/core';

import {
  Access,
  User
} from './interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

const storageKey = 'cspr';

@Injectable()
export class AuthService {
  public user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor() {
    const user: User = JSON.parse(localStorage.getItem(storageKey));

    if (user) {
      this.user$.next(user);
    }
  }

  public emailSignUp({ email, password }: Access): any {

  }

  public updateUser(user: User, data: { catchPhrase: string }): any {

  }

  public signOut(): void {
  }

  public signIn({ email, password }: Access): void {
  }

  public getUser(user: User): void {
    localStorage.setItem(storageKey, JSON.stringify(user.id));
    this.user$.next(user);
  }
}
