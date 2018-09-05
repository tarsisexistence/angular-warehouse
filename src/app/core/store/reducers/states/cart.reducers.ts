import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as fromCartReducer from '../plain/apparel.cart.reducer';
import { cartState } from '../../states';

export interface CartState {
  apparels: fromCartReducer.ApparelState
}

export const getCartState = createFeatureSelector<CartState>(cartState);

export const getApparelsCartState = createSelector(
    getCartState,
    (state: CartState) => state.apparels
);

export const getAllCartApparels = createSelector(getApparelsCartState, fromCartReducer.getCart);
export const getAllCartApparelsLoading = createSelector(getApparelsCartState, fromCartReducer.getCartLoading);
export const getAllCartApparelsLoaded = createSelector(getApparelsCartState, fromCartReducer.getCartLoaded);