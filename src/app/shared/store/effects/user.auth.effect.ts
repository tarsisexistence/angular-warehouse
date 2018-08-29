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
  tap,
  finalize
} from 'rxjs/operators';

import { ApolloService } from '@apollo/services/apollo.service';
import { AuthService } from '@auth/auth.service';
import {
  Access,
  CatchPhraseConfig,
  User
} from '@auth/shared/interfaces/user.interface';
import {
  AuthActionTypes,
  FetchUser,
  FetchUserFailure,
  FetchUserSuccess,
  SignIn,
  SignInFailure,
  SignInSuccess,
  SignUp,
  SignUpCatchPhrase,
  SignUpCatchPhraseFailure,
  SignUpCatchPhraseSuccess,
  SignUpFailure,
  SignUpSuccess
} from '@shared/store/actions/user.auth.action';
import { Go } from '@shared/store/actions/router.action';

@Injectable()
export class UserEffect {

  @Effect()
  public signUp$ = this.actions$.pipe(
      ofType<SignUp>(AuthActionTypes.SignUp),
      map((action: SignUp) => action.payload),
      switchMap((credentials: Access) => this.apolloService.signUp(credentials).pipe(
          tap((user: User) => {
            this.authService.updateUserStorage({ token: user.id });
          }),
          map((user: User) => new SignUpSuccess(user)),
          catchError((error: Error) => of(new SignUpFailure(error))),
          finalize(() => console.log('finalize signUp$'))
          )
      )
  );

  @Effect()
  public signUpCatchPhrase$ = this.actions$.pipe(
      ofType<SignUpCatchPhrase>(AuthActionTypes.SignUpCatchPhrase),
      map((action: SignUpCatchPhrase) => action.payload),
      switchMap((config: CatchPhraseConfig) => this.apolloService.setCatchPhrase(config).pipe(
          map((user: User) => new SignUpCatchPhraseSuccess(user)),
          catchError((error: Error) => of(new SignUpCatchPhraseFailure(error))),
          finalize(() => console.log('finalize signUpCatchPhrase$'))
          )
      )
  );

  @Effect()
  public signIn$ = this.actions$.pipe(
      ofType<SignIn>(AuthActionTypes.SignIn),
      map((action: SignIn) => action.payload),
      exhaustMap((credentials: Access) => this.apolloService.signIn(credentials).pipe(
          tap((user: User) => this.authService.updateUserStorage({ token: user.id })),
          map((user: User) => new SignInSuccess(user)),
          catchError((error: Error) => of(new SignInFailure(error))),
          finalize(() => console.log('finalize signIn$'))
          )
      )
  );

  @Effect()
  public loginSuccess$ = this.actions$.pipe(
      ofType(
          AuthActionTypes.SignUpCatchPhraseSuccess,
          AuthActionTypes.SignInSuccess
      ),
      map((action: SignUpCatchPhraseSuccess) => action.payload),
      map((user: User) => new Go({ path: ['user-center', user.id] })
      )
  );

  @Effect()
  public fetchUser$ = this.actions$.pipe(
      ofType<FetchUser>(AuthActionTypes.FetchUser),
      map((action: FetchUser) => action.payload),
      exhaustMap((id: string) => this.apolloService.fetchUser(id).pipe(
          map((user: User) => new FetchUserSuccess(user)),
          catchError((error: Error) => of(new FetchUserFailure(error))),
          finalize(() => console.log('finalize fetchUser$'))
          )
      )
  );

  @Effect({ dispatch: false })
  public signOut$ = this.actions$.pipe(
      ofType(AuthActionTypes.SignOut, AuthActionTypes.Redirect),
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
