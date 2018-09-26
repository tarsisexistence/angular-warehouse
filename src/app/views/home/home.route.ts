import { RSRoutes } from '!app/route-store/interfaces/routes.interface';
import {
  appRoute,
  routeStore
} from '!app/app.route';
import { RSStates } from '!app/route-store';

export const homeRoute: RSRoutes<any> = {
  root: {
    path: ''
  }
};

routeStore.createFeatureRoutes(appRoute.home, homeRoute);
