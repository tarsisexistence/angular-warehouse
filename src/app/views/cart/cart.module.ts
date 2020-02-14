import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { cartEffects, cartReducers, States } from 'store';
import { SharedModule } from 'shared/shared.module';
import { CartComponent } from './containers/cart/cart.component';
import { CartApparelComponent } from './components/cart-apparel/cart-apparel.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(States.Cart, cartReducers),
    EffectsModule.forFeature(cartEffects)
  ],
  declarations: [CartComponent, CartApparelComponent]
})
export class CartModule {}
