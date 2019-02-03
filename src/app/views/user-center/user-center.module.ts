import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { userCenterRouting } from '-user-center/hub/user-center.routes';
import { UserCenterComponent } from '-user-center/containers/user-center/user-center.component';

@NgModule({
  imports: [CommonModule, userCenterRouting],
  declarations: [UserCenterComponent]
})
export class UserCenterModule {}
