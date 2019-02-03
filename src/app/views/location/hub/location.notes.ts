import { RootRoute, RouteNote, RoutesNotes } from 'routeshub';

export interface LocationNotes extends RootRoute {
  map: RouteNote;
  stocklist: RouteNote;
}

export const locationNotes: RoutesNotes<LocationNotes> = {
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
