import {
  RSBaseRoute,
  RSRoutes
} from '$routes-entity/interfaces';

export interface LocationRoutes extends RSBaseRoute {
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
