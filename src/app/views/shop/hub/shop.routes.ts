import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { shopNotes as shop } from './shop.note';
import { ShopComponent } from 'app/views/shop/containers/shop/shop.component';
import { ShopResolver } from 'app/views/shop/shared/guards-and-resolvers/shop.resolver';

export const routes: Routes = [
  {
    path: shop.root.path,
    pathMatch: 'full',
    redirectTo: shop.all.path
  },
  {
    path: shop.all.path,
    component: ShopComponent
  },
  {
    path: shop.category.path,
    resolve: { category: ShopResolver },
    component: ShopComponent
  }
];

export const shopRouting: ModuleWithProviders = RouterModule.forChild(routes);
