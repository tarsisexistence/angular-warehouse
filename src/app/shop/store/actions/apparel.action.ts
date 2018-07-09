import { Action } from '@ngrx/store';
import { Apparel } from '../../shared/apparel.interface';

export const LOAD_APPAREL = '[Shop] Load Apparel';
export const LOAD_APPAREL_FAIL = '[Shop] Load Apparel Fail';
export const LOAD_APPAREL_SUCCESS = '[Shop] Load Apparel Success';

export class LoadApparel implements Action {
  readonly type = LOAD_APPAREL;
}

export class LoadApparelFail implements Action {
  readonly type = LOAD_APPAREL_FAIL;

  constructor(public payload: any) {

  }
}

export class LoadApparelSuccess implements Action {
  readonly type = LOAD_APPAREL_SUCCESS;

  constructor(public payload: Apparel[]) {
  }
}

export type ApparelAction = LoadApparel | LoadApparelFail | LoadApparelSuccess;