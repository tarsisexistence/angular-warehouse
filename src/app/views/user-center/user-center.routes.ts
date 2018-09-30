import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { userCenterRoute as route } from '$routes-entity/routes';
import { UserCenterComponent } from '-user-center/containers/user-center/user-center.component';
import { UserCenterGuard } from '-user-center/shared/user-center.guards';

export const routes: Routes = [
  {
    path: route.id.path,
    component: UserCenterComponent,
    canActivate: [UserCenterGuard]
  }
];

export const userCenterRouting: ModuleWithProviders = RouterModule.forChild(routes);
