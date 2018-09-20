import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  States,
  cartReducers,
  cartEffects
} from '+store/index';
import { SharedModule } from '#shared/shared.module';
import { CartComponent } from '-cart/components/cart/cart.component';
import { cartRouting } from '-cart/cart.routes';

@NgModule({
  imports: [
    CommonModule,
    cartRouting,
    SharedModule,
    StoreModule.forFeature(States.Cart, cartReducers),
    EffectsModule.forFeature(cartEffects)
  ],
  declarations: [CartComponent]
})
export class CartModule {
}
