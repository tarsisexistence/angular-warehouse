import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { UserCenterComponent } from '@user-center/containers/user-center/user-center.component';
import { UserCenterGuard } from '@user-center/shared/user-center.guards';

export const routes: Routes = [
  {
    path: ':id',
    pathMatch: 'full',
    component: UserCenterComponent,
    canActivate: [UserCenterGuard]
  }
];

export const userCenterRouting: ModuleWithProviders = RouterModule.forChild(routes);
