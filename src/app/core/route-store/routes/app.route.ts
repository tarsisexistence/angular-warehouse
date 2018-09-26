import {
  RouteStore,
  RSRoutes,
  RSStates
} from '$ngrs/index';

interface AppStates extends RSStates {
  home;
  shop;
  location;
  userCenter;
  cart;
  notFound;
}

export const appRoute: RSRoutes<AppStates> = {
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
  cart: {
    path: 'cart'
  },
  notFound: {
    path: '**'
  }
};

export const routeStore = RouteStore.getInstance();
routeStore.createRoutes(appRoute);

export enum AppRouteStates {
  root = 'root',
  home = 'home',
  shop = 'shop',
  location = 'location',
  userCenter = 'userCenter',
  cart = 'cart',
  notFound = 'notFound'
}

type states = 'home' | 'shop' | 'location' | 'userCenter' | 'cart' | 'notFound'

// export const appRoute: Partial<{ [k in AppRouteStates]: RSRoute }> = {