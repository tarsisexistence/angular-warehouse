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
    lazy: '-home/home.module#HomeModule'
  },
  shop: {
    path: 'shop',
    lazy: '-shop/shop.module#ShopModule'
  },
  location: {
    path: 'location',
    lazy: '-location/location.module#LocationModule'
  },
  userCenter: {
    path: 'user-center',
    lazy: '-user-center/user-center.module#UserCenterModule'
  },
  notFound: {
    path: '**'
  }
};
