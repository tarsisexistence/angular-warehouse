import { Action } from '@ngrx/store';

import { Apparel } from 'shop/shared/interfaces/apparel.interface';

export enum ApparelShopActionTypes {
  LoadApparel = '[Shop - Apparel] Load',
  LoadApparelFailure = '[Shop - Apparel] Load (failure)',
  LoadApparelSuccess = '[Shop - Apparel] Load (success)'
}

export class LoadApparel implements Action {
  public readonly type = ApparelShopActionTypes.LoadApparel;
}

export class LoadApparelFailure implements Action {
  public readonly type = ApparelShopActionTypes.LoadApparelFailure;

  constructor(public payload: any) {}
}

export class LoadApparelSuccess implements Action {
  public readonly type = ApparelShopActionTypes.LoadApparelSuccess;

  constructor(public payload: Apparel[]) {}
}

export type ApparelShopAction = LoadApparel | LoadApparelFailure | LoadApparelSuccess;
