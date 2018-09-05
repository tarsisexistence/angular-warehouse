import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  cartReducers,
  cartEffects,
  cartState
} from '@core/store';

import { MaterialModule } from '@shared/material/material.module';
import { CartComponent } from '@cart/cart.component';

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
