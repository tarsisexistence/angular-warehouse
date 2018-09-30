import {
  RSEntities,
  RSBaseRoute
} from '$routes-entity/interfaces';
import {
  AppRoutes,
  LocationRoutes,
  ShopRoutes,
  UserCenterRoutes
} from '$routes-entity/routes';
import {
  appEntity,
  homeEntity,
  locationEntity,
  shopEntity,
  userCenterEntity
} from '$routes-entity/entities';

export interface Entity {
  app: RSEntities<AppRoutes>;
  home: RSEntities<RSBaseRoute>;
  location: RSEntities<LocationRoutes>;
  shop: RSEntities<ShopRoutes>;
  userCenter: RSEntities<UserCenterRoutes>;
}

export const routesEntity: Entity = {
  app: appEntity,
  home: homeEntity,
  location: locationEntity,
  shop: shopEntity,
  userCenter: userCenterEntity
};