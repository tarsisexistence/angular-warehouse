import { RSRoutes } from '!app/core/route-store/interfaces/routes.interface';
import {
  appRoute,
  routeStore
} from '!app/core/route-store/routes/app.route';
import { RSStates } from '!app/core/route-store';

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
