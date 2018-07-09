import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as fromApparelReducer from './apparel.reducer';

export interface ShopState {
  apparels: fromApparelReducer.ApparelState
}

export const reducers: ActionReducerMap<ShopState> = {
  apparels: fromApparelReducer.reducer
};

export const getShopState = createFeatureSelector<ShopState>('shop');

export const getApparelState = createSelector(
    getShopState,
    (state: ShopState) => state.apparels
);

export const getAllApparel = createSelector(getApparelState, fromApparelReducer.getApparel);
export const getAllApparelLoading = createSelector(getApparelState, fromApparelReducer.getApparelLoading);
export const getAllApparelLoaded = createSelector(getApparelState, fromApparelReducer.getApparelLoaded);