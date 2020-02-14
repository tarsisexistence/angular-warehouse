import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { shopEffects, shopReducers, States } from 'store';
import { SharedModule } from 'shared/shared.module';
import { ShopHub } from './hub/shop.hub';
import { ShopComponent } from './containers/shop/shop.component';
import { ShopBarComponent } from './components/shop-bar/shop-bar.component';
import { ShopApparelsComponent } from './components/shop-apparels/shop-apparels.component';
import { ShopCartComponent } from './containers/shop-cart/shop-cart.component';
import { ShopCartButtonComponent } from './components/shop-cart-button/shop-cart-button.component';
import { ShopCartBubbleComponent } from './components/shop-cart-bubble/shop-cart-bubble.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShopHub,
    SharedModule,
    StoreModule.forFeature(States.Shop, shopReducers),
    EffectsModule.forFeature(shopEffects)
  ],
  declarations: [
    ShopComponent,
    ShopBarComponent,
    ShopApparelsComponent,
    ShopCartComponent,
    ShopCartButtonComponent,
    ShopCartBubbleComponent
  ]
})
export class ShopModule {}
