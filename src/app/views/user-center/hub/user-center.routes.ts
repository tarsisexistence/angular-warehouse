import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { userCenterNotes as notes } from './user-center.notes';
import { UserCenterComponent } from '../containers/user-center/user-center.component';
import { UserCenterGuard } from '../shared/user-center.guards';

export const routes: Routes = [
  {
    path: notes.id.path,
    component: UserCenterComponent,
    canActivate: [UserCenterGuard]
  }
];

export const userCenterRouting: ModuleWithProviders = RouterModule.forChild(
  routes
);
