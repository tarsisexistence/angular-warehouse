import {
  locationRoute,
  LocationRoutes
} from '$routes-entity/routes';
import { routeStore } from '$routes-entity/store';
import { appEntity } from './app.entity';

export const locationEntity = routeStore.createFeature<LocationRoutes>(appEntity.location, locationRoute);