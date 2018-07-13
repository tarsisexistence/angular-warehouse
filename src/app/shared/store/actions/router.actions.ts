import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum RouterActionsTypes {
  Go = '[Router] Go',
  Forward = 'Router] Forward',
  Back = '[Router] Back'
}

export class Go implements Action {
  readonly type = RouterActionsTypes.Go;

  constructor(public payload: {
    path: any[],
    query?: object;
    extras?: NavigationExtras
  }) {

  }
}

export class Forward implements Action {
  readonly type = RouterActionsTypes.Forward;
}

export class Back implements Action {
  readonly type = RouterActionsTypes.Back;
}

export type RouterActions =
    | Go
    | Forward
    | Back;