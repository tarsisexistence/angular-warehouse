import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as fromApparelReducer from '../plain/apparel.reducer';
import { shopState } from '../../states';

export interface ShopState {
  apparels: fromApparelReducer.ApparelState
}

export const getShopState = createFeatureSelector<ShopState>(shopState);

export const getApparelState = createSelector(
    getShopState,
    (state: ShopState) => state.apparels
);

export const getAllApparel = createSelector(getApparelState, fromApparelReducer.getApparel);
export const getAllApparelLoading = createSelector(getApparelState, fromApparelReducer.getApparelLoading);
export const getAllApparelLoaded = createSelector(getApparelState, fromApparelReducer.getApparelLoaded);