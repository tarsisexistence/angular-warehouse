import { Routes } from '@angular/router';

import { ShopComponent } from '../containers/shop/shop.component';
import { ShopResolver } from '../shared/guards-and-resolvers/shop.resolver';

export const shopRoutes: Routes = [
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
