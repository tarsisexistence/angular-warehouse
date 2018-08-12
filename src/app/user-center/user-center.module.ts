import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { userCenterRouting } from '@user-center/user-center.routes';
import { UserCenterGuard } from '@user-center/user-center.guards';
import { UserCenterComponent } from '@user-center/user-center.component';

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
