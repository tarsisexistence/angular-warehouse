import { Action } from '@ngrx/store';
import {
  User,
  Access,
  CatchPhraseConfig
} from '../../../auth/interfaces/user.interface';

export enum AuthActionTypes {
  SignIn = '[Auth] SignIn',
  SignInSuccess = '[Auth] SignIn Success',
  SignInFailure = '[Auth] SignIn Failure',
  SignUp = '[Auth] SignUp',
  SignUpSuccess = '[Auth] SignUp Success',
  SignUpFailure = '[Auth] SignUp Failure',
  SignUpCatchPhrase = '[Auth] SignUp CatchPhrase',
  SignUpCatchPhraseSuccess = '[Auth] SignUp CatchPhrase Success',
  SignUpCatchPhraseFailure = '[Auth] SignUp CatchPhrase Failure',
  SignOut = '[Auth] SignOut',
  GetUser = '[Auth] Get User',
  GetUserSuccess = '[Auth] Get User Success',
  GetUserFailure = '[Auth] Get User Failure'

}

export class SignIn implements Action {
  readonly type = AuthActionTypes.SignIn;

  constructor(public payload: Access) {
  }
}

export class SignInSuccess implements Action {
  readonly type = AuthActionTypes.SignInSuccess;

  constructor(public payload: User) {
    debugger;
  }
}

export class SignInFailure implements Action {
  readonly type = AuthActionTypes.SignInFailure;

  constructor(public payload: Error) {
  }
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SignUp;

  constructor(public payload: Access) {
  }
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SignUpSuccess;

  constructor(public payload: User) {
  }
}

export class SignUpFailure implements Action {
  readonly type = AuthActionTypes.SignUpFailure;

  constructor(public payload: Error) {
  }
}

export class SignUpCatchPhrase implements Action {
  readonly type = AuthActionTypes.SignUpCatchPhrase;

  constructor(public payload: CatchPhraseConfig) {
  }
}

export class SignUpCatchPhraseSuccess implements Action {
  readonly type = AuthActionTypes.SignUpCatchPhraseSuccess;

  constructor(public payload: User) {
  }
}

export class SignUpCatchPhraseFailure implements Action {
  readonly type = AuthActionTypes.SignUpCatchPhraseFailure;

  constructor(public payload: Error) {
  }
}

export class SignOut implements Action {
  readonly type = AuthActionTypes.SignOut;
}

export class GetUser implements Action {
  readonly type = AuthActionTypes.GetUser;

  constructor(public payload: string) {
  }
}

export class GetUserSuccess implements Action {
  readonly type = AuthActionTypes.GetUserSuccess;

  constructor(public payload: User) {
  }
}

export class GetUserFailure implements Action {
  readonly type = AuthActionTypes.GetUserFailure;

  constructor(public payload: Error) {
  }
}

export type AuthActionsUnion =
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
    | GetUser
    | GetUserSuccess
    | GetUserFailure;
