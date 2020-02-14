import { Action } from '@ngrx/store';

import { Apparel } from 'shop/shared/interfaces/apparel.interface';
import { CartApparel } from 'shop/shared/interfaces/cart-apparel.interface';

export enum ApparelCartActionTypes {
  AddApparel = '[Cart - Apparel] Add',
  AddApparelFailure = '[Cart - Apparel] Add (failure)',
  AddApparelSuccess = '[Cart - Apparel] Add (success)',
  ClearApparel = '[Cart - Apparel] Clear',
  ClearApparelFailure = '[Cart - Apparel] Clear (failure)',
  ClearApparelSuccess = '[Cart - Apparel] Clear (success)',
  FetchApparel = '[Cart - Apparel] Fetch',
  FetchApparelFailure = '[Cart - Apparel] Fetch (failure)',
  FetchApparelSuccess = '[Cart - Apparel] Fetch (success)',
  RemoveApparel = '[Cart - Apparel] Remove',
  RemoveApparelFailure = '[Cart - Apparel] Remove (failure)',
  RemoveApparelSuccess = '[Cart - Apparel] Remove (success)'
}

export class AddApparel implements Action {
  public readonly type = ApparelCartActionTypes.AddApparel;
  public payload: CartApparel;

  constructor(payload: Apparel) {
    this.payload = {
      ...payload,
      quantities: 1
    } as CartApparel;
  }
}

export class AddApparelFailure implements Action {
  public readonly type = ApparelCartActionTypes.AddApparelFailure;

  constructor(public payload: Error) {}
}

export class AddApparelSuccess implements Action {
  public readonly type = ApparelCartActionTypes.AddApparelSuccess;

  constructor(public payload: CartApparel) {}
}

export class ClearApparel implements Action {
  public readonly type = ApparelCartActionTypes.ClearApparel;
}

export class ClearApparelFailure implements Action {
  public readonly type = ApparelCartActionTypes.ClearApparelFailure;

  constructor(public payload: Error) {}
}

export class ClearApparelSuccess implements Action {
  public readonly type = ApparelCartActionTypes.ClearApparelSuccess;
}

export class FetchApparel implements Action {
  public readonly type = ApparelCartActionTypes.FetchApparel;
}

export class FetchApparelFailure implements Action {
  public readonly type = ApparelCartActionTypes.FetchApparelFailure;

  constructor(public payload: Error) {}
}

export class FetchApparelSuccess implements Action {
  public readonly type = ApparelCartActionTypes.FetchApparelSuccess;

  constructor(public payload: Apparel[]) {}
}

export class RemoveApparel implements Action {
  public readonly type = ApparelCartActionTypes.RemoveApparel;

  constructor(public payload: string) {}
}

export class RemoveApparelFailure implements Action {
  public readonly type = ApparelCartActionTypes.RemoveApparelFailure;

  constructor(public payload: Error) {}
}

export class RemoveApparelSuccess implements Action {
  public readonly type = ApparelCartActionTypes.RemoveApparelSuccess;

  constructor(public payload: string) {}
}

export type ApparelCartAction =
  | AddApparel
  | AddApparelFailure
  | AddApparelSuccess
  | ClearApparel
  | ClearApparelFailure
  | ClearApparelSuccess
  | FetchApparel
  | FetchApparelFailure
  | FetchApparelSuccess
  | RemoveApparel
  | RemoveApparelFailure
  | RemoveApparelSuccess;
