import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCenterHub } from 'user-center/hub/user-center.hub';
import { UserCenterComponent } from './containers/user-center/user-center.component';

@NgModule({
  imports: [CommonModule, UserCenterHub],
  declarations: [UserCenterComponent]
})
export class UserCenterModule {}
