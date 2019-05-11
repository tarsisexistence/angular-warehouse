import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { locationNotes as location } from './location.notes';
import { LocationComponent } from '../containers/location/location.component';
import { LocationStocklistComponent } from '../components/location-stocklist/location-stocklist.component';

export const routes: Routes = [
  {
    path: location.root.path,
    pathMatch: 'full',
    redirectTo: location.map.path
  },
  {
    path: location.map.path,
    component: LocationComponent
  },
  {
    path: location.stocklist.path,
    component: LocationStocklistComponent
  }
];

export const locationRouting: ModuleWithProviders = RouterModule.forChild(
  routes
);
