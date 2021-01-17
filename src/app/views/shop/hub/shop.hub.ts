import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { createFeature } from 'routeshub';

import { ShopNotes, SHOP_UNIT_KEY } from 'shop/hub/shop.notes';
import { shopRoutes } from 'shop/hub/shop.routes';

export const shopConnector = createFeature<ShopNotes>(shopRoutes, {
  key: SHOP_UNIT_KEY
});

@NgModule({
  imports: [RouterModule.forChild(shopRoutes)],
  exports: [RouterModule]
})
export class ShopHub {}
