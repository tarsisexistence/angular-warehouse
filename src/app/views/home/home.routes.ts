import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { homeRouteEntity } from '$route-store/states';
import { HomeComponent } from '-home/containers/home/home.component';

export const routes: Routes = [
  {
    path: homeRouteEntity.root.path,
    component: HomeComponent
  }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(routes);
