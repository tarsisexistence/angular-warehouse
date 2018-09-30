import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { shopRoute as route } from '$ngrs/routes';
import { ShopComponent } from '-shop/containers/shop/shop.component';
import { ShopResolver } from '-shop/shared/guards-and-resolvers/shop.resolver';

export const routes: Routes = [
  {
    path: route.root.path,
    pathMatch: 'full',
    redirectTo: route.all.path
  },
  {
    path: route.all.path,
    component: ShopComponent
  },
  {
    path: route.category.path,
    resolve: { category: ShopResolver },
    component: ShopComponent
  }
];

export const shopRouting: ModuleWithProviders = RouterModule.forChild(routes);
