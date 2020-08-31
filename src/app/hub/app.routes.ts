import { Routes } from '@angular/router';

import { CartComponent } from 'cart/containers/cart/cart.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('home/home.module').then((m) => m.HomeModule),
    data: { preload: true }
  },
  {
    path: 'shop',
    pathMatch: 'prefix',
    loadChildren: () => import('shop/shop.module').then((m) => m.ShopModule),
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: 'location',
    pathMatch: 'prefix',
    loadChildren: () => import('location/location.module').then((m) => m.LocationModule)
  },
  {
    path: 'user-center',
    pathMatch: 'full',
    loadChildren: () => import('user-center/user-center.module').then((m) => m.UserCenterModule)
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
