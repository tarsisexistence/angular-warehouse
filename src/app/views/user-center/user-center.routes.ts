import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { userCenterRoute as ROUTE } from '$route-store/routes/user-center.route';
import { UserCenterComponent } from '-user-center/containers/user-center/user-center.component';
import { UserCenterGuard } from '-user-center/shared/user-center.guards';

export const routes: Routes = [
  {
    path: ROUTE.id.path,
    component: UserCenterComponent,
    canActivate: [UserCenterGuard]
  }
];

export const userCenterRouting: ModuleWithProviders = RouterModule.forChild(routes);
