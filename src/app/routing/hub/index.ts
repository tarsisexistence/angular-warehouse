import { RootRoute, Slices } from 'routeshub';

import { AppRoutes } from './app.note';
import { appSlice as app } from './app.slice';
import { HomeRoutes, homeSlice as home } from '-home/hub';
import { LocationRoutes, locationSlice as location } from '-location/hub';
import { ShopRoutes, shopSlice as shop } from '-shop/hub';
import {
  UserCenterRoutes,
  userCenterSlice as userCenter
} from '-user-center/hub';

export interface Hub {
  app: AppRoutes;
  home: HomeRoutes;
  location: LocationRoutes;
  shop: ShopRoutes;
  userCenter: UserCenterRoutes;
}

/**
 * Declares hub which contains
 * all possible routes in the project
 * and those routes are already stateful
 */
export const hub: Slices<Hub> = {
  app,
  home,
  location,
  shop,
  userCenter
};
