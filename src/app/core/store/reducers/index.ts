import { ActionReducerMap } from '@ngrx/store';

import { reducer as apparelShopReducer } from '+store/reducers/apparel.shop.reducer';
import { reducer as apparelCartReducer } from '+store/reducers/apparel.cart.reducer';
import { reducer as userAuthReducer } from '+store/reducers/user.auth.reducer';
import {
  CartState,
  ShopState,
  AuthState
} from '+store/selectors';

export const authReducers: ActionReducerMap<AuthState> = {
  user: userAuthReducer
};

export const cartReducers: ActionReducerMap<CartState> = {
  apparels: apparelCartReducer
};

export const shopReducers: ActionReducerMap<ShopState> = {
  apparels: apparelShopReducer
};

