import { RootRoute, RouteNote, RoutesNotes } from 'routeshub';

export interface ShopRoutes extends RootRoute {
  all: RouteNote;
  category: RouteNote;
}

export const shopNotes: RoutesNotes<ShopRoutes> = {
  root: {
    path: ''
  },
  all: {
    path: 'all'
  },
  category: {
    path: ':category'
  }
};
