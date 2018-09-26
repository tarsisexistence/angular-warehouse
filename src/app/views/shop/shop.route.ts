import { RSRoutes } from '!app/route-store/interfaces/routes.interface';
import {
  appRoute,
  routeStore
} from '!app/app.route';
import { RSStates } from '!app/route-store';

interface ShopStates extends RSStates {
  all;
  category;
}

export const shopRoute: RSRoutes<any> = {
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

routeStore.createFeatureRoutes(appRoute.shop, shopRoute);
