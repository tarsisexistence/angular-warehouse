import { Action } from '@ngrx/store';

import { Apparel } from '-shop/shared/interfaces/apparel.interface';
import { CartApparel } from '-shop/shared/interfaces/cart-apparel.interface';

export enum ApparelCartActionTypes {
  FetchApparel = '[Cart] Fetch Apparel',
  FetchApparelFail = '[Cart] Fetch Apparel Fail',
  FetchApparelSuccess = '[Cart] Fetch Apparel Success',
  AddApparel = '[Cart] Add Apparel',
  AddApparelFail = '[Cart] Add Apparel Fail',
  AddApparelSuccess = '[Cart] Add Apparel Success',
  RemoveApparel = '[Cart] Remove Apparel',
  RemoveApparelFail = '[Cart] Remove Apparel Fail',
  RemoveApparelSuccess = '[Cart] Remove Apparel Success'
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

export class AddApparelFail implements Action {
  readonly type = ApparelCartActionTypes.AddApparelFail;

  constructor(public payload: Error) {}
}

export class AddApparelSuccess implements Action {
  readonly type = ApparelCartActionTypes.AddApparelSuccess;

  constructor(public payload: CartApparel) {}
}

export class FetchApparel implements Action {
  readonly type = ApparelCartActionTypes.FetchApparel;
}

export class FetchApparelFail implements Action {
  readonly type = ApparelCartActionTypes.FetchApparelFail;

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

export class RemoveApparelFail implements Action {
  readonly type = ApparelCartActionTypes.RemoveApparelFail;

  constructor(public payload: Error) {}
}

export class RemoveApparelSuccess implements Action {
  readonly type = ApparelCartActionTypes.RemoveApparelSuccess;

  constructor(public payload: string) {}
}

export type ApparelCartAction =
  | FetchApparel
  | FetchApparelFail
  | FetchApparelSuccess
  | AddApparel
  | AddApparelFail
  | AddApparelSuccess
  | RemoveApparel
  | RemoveApparelFail
  | RemoveApparelSuccess;
