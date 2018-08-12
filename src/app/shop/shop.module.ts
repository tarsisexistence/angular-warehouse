import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  shopReducers,
  shopEffects,
  shopState
} from '@shared/store';

import { MaterialModule } from '@material/material.module';
import { shopRouting } from '@shop/shop.routes';
import { ShopResolver } from '@shop/shop.resolver';
import { ShopComponent } from '@shop/shop.component';
import { BarComponent } from '@shop/bar/bar.component';
import { ApparelsComponent } from '@shop/apparels/apparels.component';
import { FooterComponent } from '@shop/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    shopRouting,
    MaterialModule,
    StoreModule.forFeature(shopState, shopReducers),
    EffectsModule.forFeature(shopEffects)
  ],
  declarations: [
    ShopComponent,
    BarComponent,
    ApparelsComponent,
    FooterComponent
  ],
  providers: [
    ShopResolver
  ]
})
export class ShopModule {
}
