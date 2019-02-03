import { RootRoute, RouteNote, RoutesNotes } from 'routeshub';

export interface UserCenterRoutes extends RootRoute {
  id: RouteNote;
}

export const userCenterNotes: RoutesNotes<UserCenterRoutes> = {
  root: {
    path: ''
  },
  id: {
    path: ':id'
  }
};
