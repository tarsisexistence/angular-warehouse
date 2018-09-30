import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { locationRoute as route } from '$ngrs/routes';
import { LocationComponent } from '-location/containers/location/location.component';
import { LocationStocklistComponent } from '-location/components/location-stocklist/location-stocklist.component';

export const routes: Routes = [
  {
    path: route.root.path,
    pathMatch: 'full',
    redirectTo: route.map.path
  },
  {
    path: route.map.path,
    component: LocationComponent
  },
  {
    path: route.stocklist.path,
    component: LocationStocklistComponent
  }
];

export const locationRouting: ModuleWithProviders = RouterModule.forChild(routes);
