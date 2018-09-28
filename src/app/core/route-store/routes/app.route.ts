import {
  RouteStore,
  RSRoutes,
  RSStates
} from '$ngrs/index';

interface AppRoutes extends RSStates {
  home;
  shop;
  location;
  userCenter;
  cart;
  notFound;
}

export const appRoute: RSRoutes<AppRoutes> = {
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
export const appRouteEntity = routeStore.createRoot<AppRoutes>(appRoute);
