import { Action } from '@ngrx/store';
import {
  User,
  Access,
  CatchPhraseConfig
} from '$core/shared/interfaces/user.interface';

export enum AuthActionTypes {
  FetchUser = '[Auth - User] Fetch',
  FetchUserFailure = '[Auth - User] Fetch (failure)',
  FetchUserSuccess = '[Auth - User] Fetch (success)',
  SignIn = '[Auth - SignIn] SignIn',
  SignInFailure = '[Auth - SignIn] SignIn (failure)',
  SignInSuccess = '[Auth - SignIn] SignIn (success)',
  SignUp = '[Auth - SignUp] SignUp',
  SignUpFailure = '[Auth - SignUp] SignUp (failure)',
  SignUpSuccess = '[Auth - SignUp] SignUp (success)',
  SignUpCatchPhrase = '[Auth - SignUp] CatchPhrase',
  SignUpCatchPhraseFailure = '[Auth - SignUp] CatchPhrase (failure)',
  SignUpCatchPhraseSuccess = '[Auth - SignUp] CatchPhrase (success)',
  SignOut = '[Auth - SignOut] SignOut',
  Redirect = '[Auth - Redirect] Redirect'
}

export class FetchUser implements Action {
  readonly type = AuthActionTypes.FetchUser;

  constructor(public payload: string) {}
}

export class FetchUserSuccess implements Action {
  readonly type = AuthActionTypes.FetchUserSuccess;

  constructor(public payload: User) {}
}

export class FetchUserFailure implements Action {
  readonly type = AuthActionTypes.FetchUserFailure;

  constructor(public payload: Error) {}
}

export class SignIn implements Action {
  readonly type = AuthActionTypes.SignIn;

  constructor(public payload: Access) {}
}

export class SignInSuccess implements Action {
  readonly type = AuthActionTypes.SignInSuccess;

  constructor(public payload: User) {}
}

export class SignInFailure implements Action {
  readonly type = AuthActionTypes.SignInFailure;

  constructor(public payload: Error) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SignUp;

  constructor(public payload: Access) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SignUpSuccess;

  constructor(public payload: User) {}
}

export class SignUpFailure implements Action {
  readonly type = AuthActionTypes.SignUpFailure;

  constructor(public payload: Error) {}
}

export class SignUpCatchPhrase implements Action {
  readonly type = AuthActionTypes.SignUpCatchPhrase;

  constructor(public payload: CatchPhraseConfig) {}
}

export class SignUpCatchPhraseSuccess implements Action {
  readonly type = AuthActionTypes.SignUpCatchPhraseSuccess;

  constructor(public payload: User) {}
}

export class SignUpCatchPhraseFailure implements Action {
  readonly type = AuthActionTypes.SignUpCatchPhraseFailure;

  constructor(public payload: Error) {}
}

export class SignOut implements Action {
  readonly type = AuthActionTypes.SignOut;
}

export class Redirect implements Action {
  readonly type = AuthActionTypes.Redirect;
}

export type AuthActionsUnion =
  | FetchUser
  | FetchUserSuccess
  | FetchUserFailure
  | SignIn
  | SignInSuccess
  | SignInFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
  | SignUpCatchPhrase
  | SignUpCatchPhraseSuccess
  | SignUpCatchPhraseFailure
  | SignOut
  | Redirect;
