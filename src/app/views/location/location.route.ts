import { RSRoutes } from '!app/route-store/interfaces/routes.interface';
import {
  appRoute,
  routeStore
} from '!app/app.route';
import { RSStates } from '!app/route-store';

export interface LocationStates extends RSStates {
  map;
  stocklist;
}

export const locationRoute: RSRoutes<any> = {
  root: {
    path: ''
  },
  map: {
    path: 'map'
  },
  stocklist: {
    path: 'stocklist'
  }
};

routeStore.createFeatureRoutes(appRoute.location, locationRoute);
