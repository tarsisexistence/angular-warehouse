import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { locationRouteEntity } from '$route-store/states';
import { LocationComponent } from '-location/containers/location/location.component';
import { LocationStocklistComponent } from '-location/components/location-stocklist/location-stocklist.component';

export const routes: Routes = [
  {
    path: locationRouteEntity.root.path,
    pathMatch: 'full',
    redirectTo: locationRouteEntity.map.path
  },
  {
    path: locationRouteEntity.map.path,
    component: LocationComponent
  },
  {
    path: locationRouteEntity.stocklist.path,
    component: LocationStocklistComponent
  }
];

export const locationRouting: ModuleWithProviders = RouterModule.forChild(routes);
