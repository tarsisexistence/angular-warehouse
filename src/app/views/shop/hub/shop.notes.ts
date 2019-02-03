import { RootRoute, RouteNote, RoutesNotes } from 'routeshub';

export interface ShopNotes extends RootRoute {
  all: RouteNote;
  category: RouteNote;
}

export const shopNotes: RoutesNotes<ShopNotes> = {
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
