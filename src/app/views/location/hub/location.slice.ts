import { createFeature, Slice } from 'routeshub';

import { appSlice } from '~app/routing/hub/app.slice';
import { locationNotes, LocationNotes as R } from './location.notes';

export const locationSlice: Slice<R> = createFeature<R>(
  appSlice.location,
  locationNotes
);
