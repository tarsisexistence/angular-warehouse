import { createFeature, Slice } from 'routeshub';

import { appSlice } from '~app/routing/hub/app.slice';
import { homeNotes, HomeNotes } from './home.notes';

export const homeSlice: Slice<HomeNotes> = createFeature<HomeNotes>(
  appSlice.home,
  homeNotes
);
