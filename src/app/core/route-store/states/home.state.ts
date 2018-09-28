import {
  appRouteEntity,
  routeStore
} from '$ngrs/routes/app.route';
import { homeRoute } from '$ngrs/routes/home.route';
import { RSStates } from '$ngrs/interfaces';

export const homeRouteEntity = routeStore.createFeature<RSStates>(appRouteEntity.home, homeRoute);