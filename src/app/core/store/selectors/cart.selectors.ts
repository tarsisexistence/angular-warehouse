import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromCartReducer from '+store/reducers/apparel.cart.reducer';
import { cartState } from '+store/states';

export interface CartState {
  apparels: fromCartReducer.ApparelState
}

export const getCartState = createFeatureSelector<CartState>(cartState);

export const getApparelCartState = createSelector(
    getCartState,
    (state: CartState) => state.apparels
);

export const getCartApparelLoading = createSelector(getApparelCartState, fromCartReducer.getCartLoading);
export const getCartApparelLoaded = createSelector(getApparelCartState, fromCartReducer.getCartLoaded);
export const getCartApparelEntities = createSelector(getApparelCartState, fromCartReducer.getCartEntities);
export const getCartApparel = createSelector(
    getCartApparelEntities,
    (entities) => Object.keys(entities).map((id: string) => entities[id])
);
