import { createFeature, Slice } from 'routeshub';

import { appSlice } from '~app/routing/hub/app.slice';
import { homeNotes, HomeRoutes } from './home.note';

export const homeSlice: Slice<HomeRoutes> = createFeature<HomeRoutes>(
  appSlice.home,
  homeNotes
);
