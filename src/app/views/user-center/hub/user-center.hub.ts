import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { createFeature } from 'routeshub';

import { userCenterRoutes } from 'user-center/hub/user-center.routes';
import { UC_UNIT_KEY, UserCenterNotes } from 'user-center/hub/user-center.notes';

export const userCenterConnector = createFeature<UserCenterNotes>(userCenterRoutes, { key: UC_UNIT_KEY });

@NgModule({
  imports: [RouterModule.forChild(userCenterRoutes)],
  exports: [RouterModule]
})
export class UserCenterHub {}
