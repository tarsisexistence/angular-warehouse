import {
  shopRoute,
  ShopRoutes
} from '$routes-entity/routes/shop.route';
import { routeStore } from '$routes-entity/store';
import { app } from './app.entity';

export const shop = routeStore.createFeature<ShopRoutes>(app.shop, shopRoute);