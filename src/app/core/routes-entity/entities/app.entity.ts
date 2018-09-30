import { routeStore } from '$routes-entity/store';
import {
  appRoute,
  AppRoutes
} from '$routes-entity/routes';

export const app = routeStore.createRoot<AppRoutes>(appRoute);