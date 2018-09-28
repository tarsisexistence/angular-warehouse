import {
  appRouteEntity,
  routeStore
} from '$ngrs/routes/app.route';
import {
  shopRoute,
  ShopRoutes
} from '$ngrs/routes/shop.route';

export const shopRouteEntity = routeStore.createFeature<ShopRoutes>(appRouteEntity.shop, shopRoute);