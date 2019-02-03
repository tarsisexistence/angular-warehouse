import { createFeature, Slice } from 'routeshub';

import { appSlice } from '~app/routing/hub/app.slice';
import { locationNotes, LocationRoutes as R } from './location.note';

export const locationSlice: Slice<R> = createFeature<R>(
  appSlice.location,
  locationNotes
);
