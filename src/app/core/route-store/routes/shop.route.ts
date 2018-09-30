import { RSRoutes } from '!app/core/route-store/interfaces/routes.interface';
import { RSBaseRoute } from '!app/core/route-store';

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

