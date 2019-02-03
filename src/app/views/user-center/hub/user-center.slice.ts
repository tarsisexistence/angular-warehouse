import { createFeature, Slice } from 'routeshub';

import { appSlice } from '~app/routing/hub/app.slice';
import { userCenterNotes, UserCenterNotes as R } from './user-center.notes';

export const userCenterSlice: Slice<R> = createFeature<R>(
  appSlice.userCenter,
  userCenterNotes
);
