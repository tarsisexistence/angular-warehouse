import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

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
    component: ShoppingCartComponent
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  initialNavigation: 'enabled',
  enableTracing: false
});
