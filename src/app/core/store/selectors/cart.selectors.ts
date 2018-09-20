import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import { States } from '+store/states';
import * as fromCartReducer from '+store/reducers/apparel.cart.reducer';

export interface CartState {
  apparels: fromCartReducer.ApparelState
}

const getCartState = createFeatureSelector<CartState>(States.Cart);
const getApparelCartState = createSelector(
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
