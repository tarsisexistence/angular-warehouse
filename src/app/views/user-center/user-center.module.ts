import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCenterComponent } from './containers/user-center/user-center.component';
import { UserCenterHub } from '-user-center/hub/user-center.hub';

@NgModule({
  imports: [CommonModule, UserCenterHub],
  declarations: [UserCenterComponent]
})
export class UserCenterModule {}
