import { RSRoutes, RSBaseRoute } from '$routes-entity/interfaces';

export interface AppRoutes extends RSBaseRoute {
  cart;
  home;
  shop;
  location;
  userCenter;
  notFound;
}

export const appRoute: RSRoutes<AppRoutes> = {
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
