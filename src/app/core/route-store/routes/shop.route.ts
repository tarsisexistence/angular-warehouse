import { RSRoutes } from '!app/core/route-store/interfaces/routes.interface';
import { RSStates } from '!app/core/route-store';

export interface ShopRoutes extends RSStates {
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

