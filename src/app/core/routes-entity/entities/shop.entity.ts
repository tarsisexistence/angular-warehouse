import {
  shopRoute,
  ShopRoutes
} from '$routes-entity/routes/shop.route';
import { routeStore } from '$routes-entity/store';
import { appEntity } from './app.entity';

export const shopEntity = routeStore.createFeature<ShopRoutes>(appEntity.shop, shopRoute);