import {
  locationRoute,
  LocationRoutes
} from '$routes-entity/routes';
import { routeStore } from '$routes-entity/store';
import { app } from './app.entity';

export const location = routeStore.createFeature<LocationRoutes>(app.location, locationRoute);
