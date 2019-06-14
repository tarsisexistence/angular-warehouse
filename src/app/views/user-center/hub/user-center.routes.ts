import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCenterComponent } from '../containers/user-center/user-center.component';
import { UserCenterGuard } from '../shared/user-center.guards';
import { createFeature, Slice } from 'routeshub';
import { appSlice } from '-routing/hub/app.routes';
import { UC_HUB_KEY, UserCenterNotes } from './user-center.notes';

export const routes: Routes = [
  {
    path: ':id',
    component: UserCenterComponent,
    canActivate: [UserCenterGuard]
  }
];

export const userCenterRouting: ModuleWithProviders = RouterModule.forChild(
  routes
);

export const userCenterSlice: Slice<UserCenterNotes> = createFeature<
  UserCenterNotes
>(appSlice.userCenter, routes, UC_HUB_KEY);
