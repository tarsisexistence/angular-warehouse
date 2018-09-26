import { RSRoutes } from '!app/route-store/interfaces/routes.interface';
import {
  appRoute,
  routeStore
} from '!app/app.route';
import { RSStates } from '!app/route-store';

interface UserCenterStates extends RSStates {
  id
}

export const userCenterRoute: RSRoutes<UserCenterStates> = {
  root: {
    path: ''
  },
  id: {
    path: ':id'
  }
};

routeStore.createFeatureRoutes(appRoute.userCenter, userCenterRoute);
