import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { homeRoute as route } from '$routes-entity/routes';
import { HomeComponent } from '-home/containers/home/home.component';

export const routes: Routes = [
  {
    path: route.root.path,
    component: HomeComponent
  }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(routes);
