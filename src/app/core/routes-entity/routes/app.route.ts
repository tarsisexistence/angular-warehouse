import { RSRoutes, RSBaseRoute } from '$routes-entity/interfaces';

export interface AppRoutes extends RSBaseRoute {
  auth;
  cart;
  home;
  shop;
  location;
  userCenter;
  notFound;
}

export const appRoute: RSRoutes<AppRoutes> = {
  auth: {
    path: 'auth',
    lazyPath: '-auth/auth.module#AuthModule'
  },
  cart: {
    path: 'cart',
    lazyPath: '-cart/cart.module#CartModule'
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
