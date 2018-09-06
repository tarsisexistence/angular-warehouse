import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  authReducers,
  authEffects,
  authState
} from '@core/store';

import { SharedModule } from '@shared/shared.module';
import { SignUpComponent } from '@auth/components/sign-up/sign-up.component';
import { SignInComponent } from '@auth/components/sign-in/sign-in.component';
import { AuthComponent } from '@auth/containers/auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(authState, authReducers),
    EffectsModule.forFeature(authEffects)
  ],
  declarations: [
    AuthComponent,
    SignUpComponent,
    SignInComponent
  ],
  entryComponents: [AuthComponent]
})
export class AuthModule {
}
