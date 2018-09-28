import { RSRoutes } from '!app/core/route-store/interfaces/routes.interface';
import { RSStates } from '!app/core/route-store';

export interface LocationRoutes extends RSStates {
  map;
  stocklist;
}

export const locationRoute: RSRoutes<LocationRoutes> = {
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
