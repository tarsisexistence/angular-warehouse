import { ActionReducerMap } from '@ngrx/store';

import { reducer as shop } from '+store/reducers/apparel.shop.reducer';
import { reducer as cart } from '+store/reducers/apparel.cart.reducer';
import { reducer as user } from '+store/reducers/user.auth.reducer';
import { AuthState, CartState, ShopState } from '+store/selectors';

export const authReducers: ActionReducerMap<AuthState> = {
  user
};

export const cartReducers: ActionReducerMap<CartState> = {
  apparels: cart
};

export const shopReducers: ActionReducerMap<ShopState> = {
  apparels: shop
};
