import {
  RSBaseRoute,
  RSRoutes
} from '$routes-entity/interfaces';

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

