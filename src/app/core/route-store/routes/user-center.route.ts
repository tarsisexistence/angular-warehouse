import { RSRoutes } from '!app/core/route-store/interfaces/routes.interface';
import {
  appRoute,
  routeStore
} from '!app/core/route-store/routes/app.route';
import { RSStates } from '!app/core/route-store';

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
