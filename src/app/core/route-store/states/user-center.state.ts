import {
  appRouteEntity,
  routeStore
} from '$ngrs/states/app.state';
import {
  userCenterRoute,
  UserCenterRoutes
} from '$ngrs/routes/user-center.route';

export const userCenterRouteEntity = routeStore.createFeature<UserCenterRoutes>(appRouteEntity.userCenter, userCenterRoute);