import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { authEffects, authReducers, States } from 'store';
import { SharedModule } from 'shared/shared.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthComponent } from './containers/auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(States.Auth, authReducers),
    EffectsModule.forFeature(authEffects)
  ],
  declarations: [AuthComponent, SignUpComponent, SignInComponent]
})
export class AuthModule {}
