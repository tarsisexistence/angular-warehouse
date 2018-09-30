import {
  userCenterRoute,
  UserCenterRoutes
} from '$routes-entity/routes/user-center.route';
import { routeStore } from '$routes-entity/store';
import { app } from './app.entity';

export const userCenter = routeStore.createFeature<UserCenterRoutes>(app.userCenter, userCenterRoute);