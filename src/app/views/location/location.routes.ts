import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { LocationComponent } from '@location/location.component';
import { StocklistsComponent } from '@location/stocklists/stocklists.component';

export const routes: Routes = [
  {
    path: 'map',
    pathMatch: 'full',
    component: LocationComponent
  },
  {
    path: 'stocklists',
    pathMatch: 'full',
    component: StocklistsComponent
  }
];

export const locationRouting: ModuleWithProviders = RouterModule.forChild(routes);
