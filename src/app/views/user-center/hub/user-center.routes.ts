import { Routes } from '@angular/router';

import { UserCenterComponent } from '../containers/user-center/user-center.component';
import { UserCenterGuard } from '../shared/user-center.guards';

export const userCenterRoutes: Routes = [
  {
    path: ':id',
    component: UserCenterComponent,
    canActivate: [UserCenterGuard]
  }
];
