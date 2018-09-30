import { RouteStore } from '$ngrs/store';
import {
  appRoute,
  AppRoutes
} from '$ngrs/routes';

export const routeStore = RouteStore.getInstance();
export const appRouteEntity = routeStore.createRoot<AppRoutes>(appRoute);