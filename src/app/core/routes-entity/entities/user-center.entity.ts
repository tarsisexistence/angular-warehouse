import {
  userCenterRoute,
  UserCenterRoutes
} from '$routes-entity/routes/user-center.route';
import { routeStore } from '$routes-entity/store';
import { appEntity } from './app.entity';

export const userCenterEntity = routeStore.createFeature<UserCenterRoutes>(appEntity.userCenter, userCenterRoute);