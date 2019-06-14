import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from '../containers/shop/shop.component';
import { ShopResolver } from '../shared/guards-and-resolvers/shop.resolver';
import { createFeature, Slice } from 'routeshub';
import { appSlice } from '-routing/hub/app.routes';
import { SHOP_HUB_KEY, ShopNotes } from './shop.notes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'all'
  },
  {
    path: 'all',
    component: ShopComponent
  },
  {
    path: ':category',
    resolve: { category: ShopResolver },
    component: ShopComponent
  }
];

export const shopRouting: ModuleWithProviders = RouterModule.forChild(routes);

export const shopSlice: Slice<ShopNotes> = createFeature<ShopNotes>(
  appSlice.shop,
  routes,
  SHOP_HUB_KEY
);
