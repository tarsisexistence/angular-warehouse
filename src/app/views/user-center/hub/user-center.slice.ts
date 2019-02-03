import { createFeature, Slice } from 'routeshub';

import { appSlice } from '~app/routing/hub/app.slice';
import { userCenterNotes, UserCenterRoutes as R } from './user-center.note';

export const userCenterSlice: Slice<R> = createFeature<R>(
  appSlice.userCenter,
  userCenterNotes
);
