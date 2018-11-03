import { Action } from '@ngrx/store';

import { Apparel } from '-shop/shared/interfaces/apparel.interface';
import { CartApparel } from '-shop/shared/interfaces/cart-apparel.interface';

export enum ApparelCartActionTypes {
  FetchApparel = '[Cart - Apparel] Fetch',
  FetchApparelFailure = '[Cart - Apparel] Fetch (failure)',
  FetchApparelSuccess = '[Cart - Apparel] Fetch (success)',
  AddApparel = '[Cart - Apparel] Add',
  AddApparelFailure = '[Cart - Apparel] Add (failure)',
  AddApparelSuccess = '[Cart - Apparel] Add (success)',
  RemoveApparel = '[Cart - Apparel] Remove',
  RemoveApparelFailure = '[Cart - Apparel] Remove (failure)',
  RemoveApparelSuccess = '[Cart - Apparel] Remove (success)'
}

export class AddApparel implements Action {
  readonly type = ApparelCartActionTypes.AddApparel;
  public payload: CartApparel;

  constructor(payload: Apparel) {
    this.payload = {
      ...payload,
      quantities: 1
    } as CartApparel;
  }
}

export class AddApparelFailure implements Action {
  readonly type = ApparelCartActionTypes.AddApparelFailure;

  constructor(public payload: Error) {}
}

export class AddApparelSuccess implements Action {
  readonly type = ApparelCartActionTypes.AddApparelSuccess;

  constructor(public payload: CartApparel) {}
}

export class FetchApparel implements Action {
  readonly type = ApparelCartActionTypes.FetchApparel;
}

export class FetchApparelFailure implements Action {
  readonly type = ApparelCartActionTypes.FetchApparelFailure;

  constructor(public payload: Error) {}
}

export class FetchApparelSuccess implements Action {
  readonly type = ApparelCartActionTypes.FetchApparelSuccess;

  constructor(public payload: Apparel[]) {}
}

export class RemoveApparel implements Action {
  readonly type = ApparelCartActionTypes.RemoveApparel;

  constructor(public payload: string) {}
}

export class RemoveApparelFailure implements Action {
  readonly type = ApparelCartActionTypes.RemoveApparelFailure;

  constructor(public payload: Error) {}
}

export class RemoveApparelSuccess implements Action {
  readonly type = ApparelCartActionTypes.RemoveApparelSuccess;

  constructor(public payload: string) {}
}

export type ApparelCartAction =
  | FetchApparel
  | FetchApparelFailure
  | FetchApparelSuccess
  | AddApparel
  | AddApparelFailure
  | AddApparelSuccess
  | RemoveApparel
  | RemoveApparelFailure
  | RemoveApparelSuccess;
