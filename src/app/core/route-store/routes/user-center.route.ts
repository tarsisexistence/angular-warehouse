import { RSRoutes } from '!app/core/route-store/interfaces/routes.interface';
import { RSStates } from '$route-store/index';

export interface UserCenterStates extends RSStates {
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

