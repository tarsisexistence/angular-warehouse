import {
  RSBaseRoute,
  RSEntity,
  RSEntities
} from '$routes-entity/interfaces';
import {
  AppRoutes,
  LocationRoutes,
  ShopRoutes,
  UserCenterRoutes
} from '$routes-entity/routes';
import {
  app,
  home,
  location,
  shop,
  userCenter
} from '$routes-entity/entities';

export interface Entity {
  app: RSEntity<AppRoutes>;
  home: RSEntity<RSBaseRoute>;
  location: RSEntity<LocationRoutes>;
  shop: RSEntity<ShopRoutes>;
  userCenter: RSEntity<UserCenterRoutes>;
}

export const routesEntity: RSEntities<Entity> = {
  app,
  home,
  location,
  shop,
  userCenter
};
