import {
  appRouteEntity,
  routeStore
} from '$ngrs/states/app.state';
import {
  shopRoute,
  ShopRoutes
} from '$ngrs/routes/shop.route';

export const shopRouteEntity = routeStore.createFeature<ShopRoutes>(appRouteEntity.shop, shopRoute);