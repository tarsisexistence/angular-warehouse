import { ActionReducerMap } from '@ngrx/store';
import { reducer as apparelShopReducer } from './plain/apparel.shop.reducer';
import { reducer as apparelCartReducer } from './plain/apparel.cart.reducer';
import * as fromStates from './states';

export * from './states';

export const cartReducers: ActionReducerMap<fromStates.CartState> = {
  apparels: apparelCartReducer
};

export const shopReducers: ActionReducerMap<fromStates.ShopState> = {
  apparels: apparelShopReducer
};