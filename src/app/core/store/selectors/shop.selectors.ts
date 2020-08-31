import { createFeatureSelector, createSelector } from '@ngrx/store';

import { States } from 'store/states';
import type { ApparelState } from 'store/reducers/apparel.shop.reducer';

export interface ShopState {
  apparels: ApparelState;
}

const getShopState = createFeatureSelector<ShopState>(States.Shop);

const getApparelsState = createSelector(getShopState, (state: ShopState) => state.apparels);

export const getShopApparelLoaded = createSelector(getApparelsState, (state: ApparelState) => state.loaded);
export const getShopApparelEntities = createSelector(getApparelsState, (state: ApparelState) => state.entities);
export const getShopApparel = createSelector(getShopApparelEntities, (entities) =>
  Object.keys(entities).map((id: string) => entities[id])
);
