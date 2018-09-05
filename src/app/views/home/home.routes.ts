import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { HomeComponent } from '@home/containers/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(routes);
