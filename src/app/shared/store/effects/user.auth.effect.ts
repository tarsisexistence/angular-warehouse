import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  Effect,
  Actions,
  ofType
} from '@ngrx/effects';
import { of } from 'rxjs';
import {
  switchMap,
  exhaustMap,
  map,
  catchError,
  take,
  tap
} from 'rxjs/operators';

import { ApolloService } from '../../../apollo/services/apollo.service';
import { AuthService } from '../../../auth/auth.service';

import * as UserAuthActions from '../actions/user.auth.actions';
import {
  Access,
  StorageUser,
  User
} from '../../../auth/interfaces/user.interface';

@Injectable()
export class UserEffect {

  @Effect()
  public signUp$ = this.actions$
      .ofType(UserAuthActions.AuthActionTypes.SignUp)
      .pipe(
          switchMap((action: UserAuthActions.SignUp) => {
                return this.apolloService.signUp(action.payload)
                    .pipe(
                        take(1),
                        map((user: User) => {
                          const storageUser: StorageUser = { token: user.id };
                          this.authService.updateUserStorage(storageUser);
                          return new UserAuthActions.SignUpSuccess(user);
                        }),
                        catchError((error: Error) => of(new UserAuthActions.SignUpFailure(error)))
                    );
              }
          )
      );

  @Effect()
  public signUpCatchPhrase$ = this.actions$
      .ofType(UserAuthActions.AuthActionTypes.SignUpCatchPhrase)
      .pipe(
          switchMap((action: UserAuthActions.SignUpCatchPhrase) => {
                return this.apolloService.setCatchPhrase(action.payload)
                    .pipe(
                        take(1),
                        map((user: User) => {
                          const storageUser: StorageUser = { token: user.id };
                          this.authService.updateUserStorage(storageUser);
                          return new UserAuthActions.SignUpCatchPhraseSuccess(user);
                        }),
                        catchError((error: Error) => of(new UserAuthActions.SignUpCatchPhraseFailure(error)))
                    );
              }
          )
      );

  @Effect()
  public signIn$ = this.actions$.pipe(
      ofType(UserAuthActions.AuthActionTypes.SignIn),
      map((action: UserAuthActions.SignIn) => action.payload),
      exhaustMap((credentials: Access) => this.apolloService.signIn(credentials)
          .pipe(
              tap((user: User) => this.router.navigate(['user-center', user.id])),
              take(1),
              map((user: User) => {
                const storageUser: StorageUser = { token: user.id };
                this.authService.updateUserStorage(storageUser);
                return new UserAuthActions.SignInSuccess(user);
              }),
              catchError((error: Error) => of(new UserAuthActions.SignInFailure(error)))
          )
      )
  );

  @Effect()
  public getUser$ = this.actions$.pipe(
      ofType(UserAuthActions.AuthActionTypes.GetUser),
      map((action: UserAuthActions.GetUser) => action.payload),
      exhaustMap((id: string) => this.apolloService.getUser(id)
          .pipe(
              take(1),
              map((user: User) => new UserAuthActions.GetUserSuccess(user)),
              catchError((error: Error) => of(new UserAuthActions.GetUserFailure(error)))
          )
      )
  );

  @Effect({ dispatch: false })
  public signOut$ = this.actions$.pipe(
      ofType(UserAuthActions.AuthActionTypes.SignOut),
      tap(() => this.authService.clearUser()),
      tap(() => this.router.navigate(['']))
  );

  constructor(
      private actions$: Actions,
      private apolloService: ApolloService,
      private authService: AuthService,
      private router: Router
  ) {
  }
}