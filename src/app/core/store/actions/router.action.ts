import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum RouterActionsTypes {
  Go = '[Router - Shift] Go',
  Forward = 'Router - Shift] Forward',
  Back = '[Router - Shift] Back'
}

export class Go implements Action {
  public readonly type = RouterActionsTypes.Go;

  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Forward implements Action {
  public readonly type = RouterActionsTypes.Forward;
}

export class Back implements Action {
  public readonly type = RouterActionsTypes.Back;
}

export type RouterActions = Go | Forward | Back;
