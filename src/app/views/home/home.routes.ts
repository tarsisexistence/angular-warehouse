import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { homeRoute as ROUTE } from '$route-store/routes/home.route';
import { HomeComponent } from '-home/containers/home/home.component';

export const routes: Routes = [
  {
    path: ROUTE.root.path,
    component: HomeComponent
  }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(routes);
