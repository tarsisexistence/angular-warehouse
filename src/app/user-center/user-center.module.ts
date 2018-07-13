import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCenterComponent } from './user-center.component';
import { userCenterRouting } from './user-center.routes';
import { UserCenterGuard } from '@app/user-center/user-center.guards';

@NgModule({
  imports: [
    CommonModule,
    userCenterRouting
  ],
  declarations: [UserCenterComponent],
  providers: [UserCenterGuard]
})
export class UserCenterModule {
}
