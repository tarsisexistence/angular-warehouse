import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { CartComponent } from '$cart/components/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: '-home/home.module#HomeModule'
  },
  {
    path: 'shop',
    loadChildren: '-shop/shop.module#ShopModule',
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: 'location',
    loadChildren: '-location/location.module#LocationModule'
  },
  {
    path: 'user-center',
    loadChildren: '-user-center/user-center.module#UserCenterModule'
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

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  initialNavigation: 'enabled',
  onSameUrlNavigation: 'reload',
  enableTracing: false
});
