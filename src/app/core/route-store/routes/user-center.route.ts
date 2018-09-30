import { RSRoutes } from '!app/core/route-store/interfaces/routes.interface';
import { RSBaseRoute } from '$route-store/index';

export interface UserCenterRoutes extends RSBaseRoute {
  id
}

export const userCenterRoute: RSRoutes<UserCenterRoutes> = {
  root: {
    path: ''
  },
  id: {
    path: ':id'
  }
};

