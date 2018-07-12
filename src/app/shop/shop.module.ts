import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  shopReducers,
  shopEffects,
  shopState
} from '../shared/store';

import { shopRouting } from './shop.routes';
import { ShopResolver } from './shop.resolver';
import { MaterialModule } from '../shared/material/material.module';
import { ShopComponent } from './shop.component';
import { BarComponent } from './bar/bar.component';
import { ApparelsComponent } from './apparels/apparels.component';
import { FooterComponent } from './footer/footer.component';

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
