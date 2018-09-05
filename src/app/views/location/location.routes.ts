import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { LocationComponent } from '@location/containers/location/location.component';
import { LocationStocklistComponent } from '@location/components/location-stocklist/location-stocklist.component';

// TODO: make states as enum v's
export const routes: Routes = [
  {
    path: 'map',
    pathMatch: 'full',
    component: LocationComponent
  },
  {
    path: 'stocklist',
    pathMatch: 'full',
    component: LocationStocklistComponent
  }
];

export const locationRouting: ModuleWithProviders = RouterModule.forChild(routes);
