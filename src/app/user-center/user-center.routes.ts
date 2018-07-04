import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { UserCenterComponent } from './user-center.component';

export const routes: Routes = [
  {
    path: ':uid',
    pathMatch: 'full',
    component: UserCenterComponent
  }
];

export const userCenterRouting: ModuleWithProviders = RouterModule.forChild(routes);
