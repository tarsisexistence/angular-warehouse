import {
  RSBaseRoute,
  RSApplicationEntity
} from '$routes-entity/interfaces';
import * as fromRoutes from '$routes-entity/routes';
import * as fromEntities from '$routes-entity/entities';

export interface Entity {
  app: fromRoutes.AppRoutes;
  home: RSBaseRoute;
  location: fromRoutes.LocationRoutes;
  shop: fromRoutes.ShopRoutes;
  userCenter: fromRoutes.UserCenterRoutes;
}

const { app, home, location, shop, userCenter } = fromEntities;

export const routesEntity: RSApplicationEntity<Entity> = {
  app,
  home,
  location,
  shop,
  userCenter
};
