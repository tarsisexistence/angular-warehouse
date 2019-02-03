import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { userCenterNotes as UC } from './user-center.note';
import { UserCenterComponent } from 'app/views/user-center/containers/user-center/user-center.component';
import { UserCenterGuard } from 'app/views/user-center/shared/user-center.guards';

export const routes: Routes = [
  {
    path: UC.id.path,
    component: UserCenterComponent,
    canActivate: [UserCenterGuard]
  }
];

export const userCenterRouting: ModuleWithProviders = RouterModule.forChild(
  routes
);
