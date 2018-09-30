import {
  RSBaseRoute,
  RSRoutes
} from '$routes-entity/interfaces';

export interface ShopRoutes extends RSBaseRoute {
  all;
  category;
}

export const shopRoute: RSRoutes<ShopRoutes> = {
  root: {
    path: ''
  },
  all: {
    path: 'all'
  },
  category: {
    path: ':category'
  }
};

