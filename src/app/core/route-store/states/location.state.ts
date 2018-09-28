import {
  appRouteEntity,
  routeStore
} from '$ngrs/routes/app.route';
import {
  locationRoute,
  LocationRoutes
} from '$ngrs/routes/location.route';

export const locationRouteEntity = routeStore.createFeature<LocationRoutes>(appRouteEntity.location, locationRoute);