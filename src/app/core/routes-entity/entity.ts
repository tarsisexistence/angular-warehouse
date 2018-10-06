import {
  RSBaseRoute,
  RSEntity,
  RSEntities
} from '$routes-entity/interfaces';

import * as fromRoutes from '$routes-entity/routes';
import * as fromEntities from '$routes-entity/entities';

export interface Entity {
  app: RSEntity<fromRoutes.AppRoutes>;
  home: RSEntity<RSBaseRoute>;
  location: RSEntity<fromRoutes.LocationRoutes>;
  shop: RSEntity<fromRoutes.ShopRoutes>;
  userCenter: RSEntity<fromRoutes.UserCenterRoutes>;
}

export const routesEntity: RSEntities<Entity> = {
  app: fromEntities.app,
  home: fromEntities.home,
  location: fromEntities.location,
  shop: fromEntities.shop,
  userCenter: fromEntities.userCenter
};
