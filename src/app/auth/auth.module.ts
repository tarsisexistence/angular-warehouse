import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    AuthComponent,
    SignUpComponent,
    SignInComponent
  ],
  entryComponents: [AuthComponent],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule {
}
