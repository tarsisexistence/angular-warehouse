import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as fromApparelReducer from '../plain/apparel.shop.reducer';
import { shopState } from '../../states';

export interface ShopState {
  apparels: fromApparelReducer.ApparelState
}

export const getShopState = createFeatureSelector<ShopState>(shopState);

export const getApparelsState = createSelector(
    getShopState,
    (state: ShopState) => state.apparels
);

export const getAllShopApparels = createSelector(getApparelsState, fromApparelReducer.getApparel);
export const getAllShopApparelsLoading = createSelector(getApparelsState, fromApparelReducer.getApparelLoading);
export const getAllShopApparelsLoaded = createSelector(getApparelsState, fromApparelReducer.getApparelLoaded);