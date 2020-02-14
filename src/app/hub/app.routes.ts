import { Routes } from '@angular/router';

import { CartComponent } from 'cart/containers/cart/cart.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: 'home/home.module#HomeModule',
    data: { preload: true }
  },
  {
    path: 'shop',
    pathMatch: 'prefix',
    loadChildren: 'shop/shop.module#ShopModule',
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: 'location',
    pathMatch: 'prefix',
    loadChildren: 'location/location.module#LocationModule'
  },
  {
    path: 'user-center',
    pathMatch: 'full',
    loadChildren: 'user-center/user-center.module#UserCenterModule'
  },
  {
    path: 'cart',
    pathMatch: 'full',
    component: CartComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
