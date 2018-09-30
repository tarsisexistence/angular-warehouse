import {
  appRouteEntity,
  routeStore
} from '$ngrs/states/app.state';
import {
  locationRoute,
  LocationRoutes
} from '$ngrs/routes/location.route';

export const locationRouteEntity = routeStore.createFeature<LocationRoutes>(appRouteEntity.location, locationRoute);