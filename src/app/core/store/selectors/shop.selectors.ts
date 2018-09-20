import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromApparelReducer from '+store/reducers/apparel.shop.reducer';
import { shopState } from '+store/states';

export interface ShopState {
  apparels: fromApparelReducer.ApparelState
}

export const getShopState = createFeatureSelector<ShopState>(shopState);

export const getApparelsState = createSelector(
    getShopState,
    (state: ShopState) => state.apparels
);

export const getShopApparelsLoading = createSelector(getApparelsState, fromApparelReducer.getApparelLoading);
export const getShopApparelsLoaded = createSelector(getApparelsState, fromApparelReducer.getApparelLoaded);
export const getShopApparelEntities = createSelector(getApparelsState, fromApparelReducer.getApparelEntities);
export const getShopApparels = createSelector(
    getShopApparelEntities,
    (entities) => Object.keys(entities).map((id: string) => entities[id])
);
