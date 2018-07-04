import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCenterComponent } from './user-center.component';
import { userCenterRouting } from './user-center.routes';

@NgModule({
  imports: [
    CommonModule,
    userCenterRouting
  ],
  declarations: [UserCenterComponent]
})
export class UserCenterModule {
}
