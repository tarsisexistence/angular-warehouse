import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  authReducers,
  authEffects,
  authState
} from '@shared/store';

import { MaterialModule } from '@material/material.module';
import { AuthService } from './auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature(authState, authReducers),
    EffectsModule.forFeature(authEffects)
  ],
  declarations: [
    AuthComponent,
    SignUpComponent,
    SignInComponent
  ],
  entryComponents: [AuthComponent],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
