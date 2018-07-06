import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  Access,
  User
} from './interfaces/user.interface';

@Injectable()
export class AuthService {
  public user$: Observable<User>;

  constructor() {
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
