import { Slices } from 'routeshub';

import { AppNotes } from './app.notes';
import { appSlice as app } from './app.slice';
import { HomeNotes, homeSlice as home } from '-home/hub';
import { LocationNotes, locationSlice as location } from '-location/hub';
import { ShopNotes, shopSlice as shop } from '-shop/hub';
import {
  UserCenterNotes,
  userCenterSlice as userCenter
} from '-user-center/hub';

export interface Hub {
  app: AppNotes;
  home: HomeNotes;
  location: LocationNotes;
  shop: ShopNotes;
  userCenter: UserCenterNotes;
}

export const hub: Slices<Hub> = {
  app,
  home,
  location,
  shop,
  userCenter
};
