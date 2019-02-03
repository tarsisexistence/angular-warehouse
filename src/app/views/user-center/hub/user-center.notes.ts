import { RootRoute, RouteNote, RoutesNotes } from 'routeshub';

export interface UserCenterNotes extends RootRoute {
  id: RouteNote;
}

export const userCenterNotes: RoutesNotes<UserCenterNotes> = {
  root: {
    path: ''
  },
  id: {
    path: ':id'
  }
};
