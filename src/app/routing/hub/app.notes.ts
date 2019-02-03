import { RouteNote, RoutesNotes } from 'routeshub';

/**
 * Declares a type which contains
 * root and notFound routes
 */
export interface AppNotes {
  cart: RouteNote;
  home: RouteNote;
  shop: RouteNote;
  location: RouteNote;
  userCenter: RouteNote;
  notFound: RouteNote;
}

/**
 * Declares App' notes
 */
export const appNotes: RoutesNotes<AppNotes> = {
  cart: {
    path: 'cart'
  },
  home: {
    path: '',
    lazyPath: '-home/home.module#HomeModule'
  },
  shop: {
    path: 'shop',
    lazyPath: '-shop/shop.module#ShopModule'
  },
  location: {
    path: 'location',
    lazyPath: '-location/location.module#LocationModule'
  },
  userCenter: {
    path: 'user-center',
    lazyPath: '-user-center/user-center.module#UserCenterModule'
  },
  notFound: {
    path: '**'
  }
};
