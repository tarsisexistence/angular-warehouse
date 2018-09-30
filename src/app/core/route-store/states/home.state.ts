import {
  appRouteEntity,
  routeStore
} from '$ngrs/states/app.state';
import { homeRoute } from '$ngrs/routes/home.route';
import { RSBaseRoute } from '$ngrs/interfaces';

export const homeRouteEntity = routeStore.createFeature<RSBaseRoute>(appRouteEntity.home, homeRoute);