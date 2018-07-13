import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { UserCenterComponent } from './user-center.component';
import { UserCenterGuard } from '@app/user-center/user-center.guards';

export const routes: Routes = [
  {
    path: ':id',
    pathMatch: 'full',
    component: UserCenterComponent,
    canActivate: [UserCenterGuard]
  }
];

export const userCenterRouting: ModuleWithProviders = RouterModule.forChild(routes);
