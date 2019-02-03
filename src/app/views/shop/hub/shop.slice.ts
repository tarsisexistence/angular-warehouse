import { createFeature, Slice } from 'routeshub';

import { appSlice } from '~app/routing/hub/app.slice';
import { shopNotes, ShopNotes as R } from './shop.notes';

export const shopSlice: Slice<R> = createFeature<R>(appSlice.shop, shopNotes);
