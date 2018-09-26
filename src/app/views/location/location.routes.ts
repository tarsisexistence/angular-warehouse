import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { locationRoute as ROUTE } from '$route-store/routes/location.route';
import { LocationComponent } from '-location/containers/location/location.component';
import { LocationStocklistComponent } from '-location/components/location-stocklist/location-stocklist.component';

export const routes: Routes = [
  {
    path: ROUTE.root.path,
    pathMatch: 'full',
    redirectTo: ROUTE.map.path
  },
  {
    path: ROUTE.map.path,
    component: LocationComponent
  },
  {
    path: ROUTE.stocklist.path,
    component: LocationStocklistComponent
  }
];

export const locationRouting: ModuleWithProviders = RouterModule.forChild(routes);
