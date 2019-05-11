import { createFeatureSelector, createSelector } from '@ngrx/store';

import { States } from '+store/states';
import * as fromApparelReducer from '+store/reducers/apparel.shop.reducer';

export interface ShopState {
  apparels: fromApparelReducer.ApparelState;
}

const getShopState = createFeatureSelector<ShopState>(States.Shop);
const getApparelsState = createSelector(
  getShopState,
  (state: ShopState) => state.apparels
);

export const getShopApparelLoaded = createSelector(
  getApparelsState,
  fromApparelReducer.getApparelLoaded
);
export const getShopApparelEntities = createSelector(
  getApparelsState,
  fromApparelReducer.getApparelEntities
);
export const getShopApparel = createSelector(
  getShopApparelEntities,
  (entities) => Object.keys(entities).map((id: string) => entities[id])
);
