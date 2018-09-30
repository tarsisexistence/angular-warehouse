import {
  RSBaseRoute,
  RSApplicationEntity
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
  app: AppRoutes;
  home: RSBaseRoute;
  location: LocationRoutes;
  shop: ShopRoutes;
  userCenter: UserCenterRoutes;
}

export const routesEntity: RSApplicationEntity<Entity> = {
  app,
  home,
  location,
  shop,
  userCenter
};
