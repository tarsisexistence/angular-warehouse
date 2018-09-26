import { RSRoutes } from '!app/core/route-store/interfaces/routes.interface';
import {
  appRoute,
  routeStore
} from '!app/core/route-store/routes/app.route';
import { RSStates } from '!app/core/route-store';

export const homeRoute: RSRoutes<any> = {
  root: {
    path: ''
  }
};

routeStore.createFeatureRoutes(appRoute.home, homeRoute);
