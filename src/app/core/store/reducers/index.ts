import { ActionReducerMap } from '@ngrx/store';

import { shopReducer } from 'store/reducers/apparel.shop.reducer';
import { cartReducer } from 'store/reducers/apparel.cart.reducer';
import { userReducer } from 'store/reducers/user.auth.reducer';
import { AuthState, CartState, ShopState } from 'store/selectors';

export const authReducers: ActionReducerMap<AuthState> = {
  user: userReducer
};

export const cartReducers: ActionReducerMap<CartState> = {
  apparels: cartReducer
};

export const shopReducers: ActionReducerMap<ShopState> = {
  apparels: shopReducer
};
