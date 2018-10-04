import {
  RSBaseRoute,
  RSApplicationEntity,
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
  app: RSEntities<AppRoutes>;
  home: RSEntities<RSBaseRoute>;
  location: RSEntities<LocationRoutes>;
  shop: RSEntities<ShopRoutes>;
  userCenter: RSEntities<UserCenterRoutes>;
}

export const routesEntity: RSApplicationEntity<Entity> = {
  app,
  home,
  location,
  shop,
  userCenter
};

