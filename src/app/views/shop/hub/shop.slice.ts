import { createFeature, Slice } from 'routeshub';

import { appSlice } from '~app/routing/hub/app.slice';
import { shopNotes, ShopRoutes as R } from './shop.note';

export const shopSlice: Slice<R> = createFeature<R>(appSlice.shop, shopNotes);
