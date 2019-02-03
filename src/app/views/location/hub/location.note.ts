import { RootRoute, RouteNote, RoutesNotes } from 'routeshub';

export interface LocationRoutes extends RootRoute {
  map: RouteNote;
  stocklist: RouteNote;
}

export const locationNotes: RoutesNotes<LocationRoutes> = {
  root: {
    path: ''
  },
  map: {
    path: 'map'
  },
  stocklist: {
    path: 'stocklist'
  }
};
