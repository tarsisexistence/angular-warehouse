import { Action } from '@ngrx/store';
import { Apparel } from '../../../shop/shared/apparel.interface';

export enum ApparelShopActionTypes {
  LoadApparel = '[Shop] Load Apparel',
  LoadApparelFail = '[Shop] Load Apparel Fail',
  LoadApparelSuccess = '[Shop] Load Apparel Success'
}

export class LoadApparel implements Action {
  readonly type = ApparelShopActionTypes.LoadApparel;
}

export class LoadApparelFail implements Action {
  readonly type = ApparelShopActionTypes.LoadApparelFail;

  constructor(public payload: Error) {
  }
}

export class LoadApparelSuccess implements Action {
  readonly type = ApparelShopActionTypes.LoadApparelSuccess;

  constructor(public payload: Apparel[]) {
  }
}

export type ApparelShopAction =
    | LoadApparel
    | LoadApparelFail
    | LoadApparelSuccess;