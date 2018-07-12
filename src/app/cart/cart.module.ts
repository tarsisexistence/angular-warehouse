import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  cartReducers,
  cartEffects,
  cartState
} from '@shared/store';

import { CartComponent } from './cart.component';
import { MaterialModule } from '@shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature(cartState, cartReducers),
    EffectsModule.forFeature(cartEffects)
  ],
  declarations: [
    CartComponent
  ]
})
export class CartModule {
}
