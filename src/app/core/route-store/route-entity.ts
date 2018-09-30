import { RSEntities } from '$ngrs/interfaces/entity.interface';
import { RSBaseRoute } from '$ngrs/interfaces';
import {
  AppRoutes,
  LocationRoutes,
  ShopRoutes,
  UserCenterRoutes
} from '$ngrs/routes';
import {
  appRouteEntity,
  homeRouteEntity,
  locationRouteEntity,
  shopRouteEntity,
  userCenterRouteEntity
} from '$ngrs/states';

export interface RouteEntity {
  app: RSEntities<AppRoutes>;
  home: RSEntities<RSBaseRoute>;
  location: RSEntities<LocationRoutes>;
  shop: RSEntities<ShopRoutes>;
  userCenter: RSEntities<UserCenterRoutes>;
}

export const routeEntity: RouteEntity = {
  app: appRouteEntity,
  home: homeRouteEntity,
  location: locationRouteEntity,
  shop: shopRouteEntity,
  userCenter: userCenterRouteEntity
};