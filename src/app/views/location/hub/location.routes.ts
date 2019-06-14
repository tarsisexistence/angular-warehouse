import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from '../containers/location/location.component';
// tslint:disable-next-line:max-line-length
import { LocationStocklistComponent } from '../components/location-stocklist/location-stocklist.component';
import { createFeature, Slice } from 'routeshub';
import { appSlice } from '-routing/hub/app.routes';
import { LOCATION_HUB_KEY, LocationNotes } from './location.notes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'map'
  },
  {
    path: 'map',
    component: LocationComponent
  },
  {
    path: 'stocklist',
    component: LocationStocklistComponent
  }
];

export const locationRouting: ModuleWithProviders = RouterModule.forChild(
  routes
);

export const locationSlice: Slice<LocationNotes> = createFeature<LocationNotes>(
  appSlice.location,
  routes,
  LOCATION_HUB_KEY
);
