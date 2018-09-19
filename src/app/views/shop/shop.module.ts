import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  shopReducers,
  shopEffects,
  shopState
} from '$core/store';

import { SharedModule } from '#shared/shared.module';
import { shopRouting } from '-shop/shop.routes';
import { ShopComponent } from '-shop/containers/shop/shop.component';
import { ShopBarComponent } from '-shop/components/shop-bar/shop-bar.component';
import { ShopApparelsComponent } from '-shop/components/shop-apparels/shop-apparels.component';
import { ShopCartComponent } from '-shop/containers/shop-cart/shop-cart.component';
import { ShopCartButtonComponent } from '-shop/components/shop-cart-button/shop-cart-button.component';
import { ShopCartBubbleComponent } from '-shop/components/shop-cart-bubble/shop-cart-bubble.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    shopRouting,
    SharedModule,
    StoreModule.forFeature(shopState, shopReducers),
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
export class ShopModule {
}
