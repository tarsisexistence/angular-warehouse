import { Injectable } from '@angular/core';

import {
  Access,
  User
} from './interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  public user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor() {
    if (localStorage.getItem('csp_li')) {
      this.user$.next(JSON.parse(localStorage.getItem('csp_li')));
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

  private setUserDoc(user: any): any {

  }
}
