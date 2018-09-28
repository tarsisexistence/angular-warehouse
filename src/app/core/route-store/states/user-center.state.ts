import {
  appRouteEntity,
  routeStore
} from '$ngrs/routes/app.route';
import {
  userCenterRoute,
  UserCenterStates
} from '$ngrs/routes/user-center.route';

export const userCenterRouteEntity = routeStore.createFeature<UserCenterStates>(appRouteEntity.userCenter, userCenterRoute);