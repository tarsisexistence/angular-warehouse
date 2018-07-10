import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'shop',
    loadChildren: 'app/shop/shop.module#ShopModule'
  },
  {
    path: 'location',
    loadChildren: 'app/location/location.module#LocationModule'
  },
  {
    path: 'user-center',
    loadChildren: 'app/user-center/user-center.module#UserCenterModule'
  },
  {
    path: 'cart',
    pathMatch: 'full',
    component: CartComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  initialNavigation: 'enabled',
  enableTracing: false
});
