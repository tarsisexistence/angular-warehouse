import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { UserCenterComponent } from './user-center.component';

export const routes: Routes = [
  {
    path: ':id',
    pathMatch: 'full',
    component: UserCenterComponent
  }
];

export const userCenterRouting: ModuleWithProviders = RouterModule.forChild(routes);
