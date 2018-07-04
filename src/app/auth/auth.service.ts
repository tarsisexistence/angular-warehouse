import { Injectable } from '@angular/core';

import {
  Observable,
  of
} from 'rxjs';
import {
  switchMap,
  share
} from 'rxjs/operators';

import { User } from './interfaces/user.interface';
import { Credentials } from './interfaces/credentials.interface';

@Injectable()
export class AuthService {
  public user$: Observable<User>;

  constructor(
  ) {
  }

  public emailSignUp({ email, password }: Credentials): any {

  }

  public updateUser(user: User, data: { catchPhrase: string }): any {
  }

  public signOut(): void {
  }

  public signIn({ email, password }: Credentials): void {
  }

  private setUserDoc(user: any): any {

  }
}
