import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { shopRouteEntity } from '$route-store/states';
import { ShopComponent } from '-shop/containers/shop/shop.component';
import { ShopResolver } from '-shop/shared/guards-and-resolvers/shop.resolver';

export const routes: Routes = [
  {
    path: shopRouteEntity.root.path,
    pathMatch: 'full',
    redirectTo: shopRouteEntity.all.path
  },
  {
    path: shopRouteEntity.all.path,
    component: ShopComponent
  },
  {
    path: shopRouteEntity.category.path,
    resolve: { category: ShopResolver },
    component: ShopComponent
  }
];

export const shopRouting: ModuleWithProviders = RouterModule.forChild(routes);
