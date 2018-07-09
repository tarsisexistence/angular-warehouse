import { ActionReducerMap } from '@ngrx/store';
import { ShopState } from './module/shop.reducers';
import { reducer as apparelReducer } from './plain/apparel.reducer';

export * from './module';

export const shopReducers: ActionReducerMap<ShopState> = {
  apparels: apparelReducer
};