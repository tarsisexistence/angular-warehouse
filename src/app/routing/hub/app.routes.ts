import { Routes } from '@angular/router';

import { CartComponent } from 'app/views/cart/containers/cart/cart.component';
import { createRoot, Slice } from 'routeshub';
import { APP_HUB_KEY, AppNotes } from './app.notes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: '-home/home.module#HomeModule',
    data: { preload: true }
  },
  {
    path: 'shop',
    pathMatch: 'prefix',
    loadChildren: '-shop/shop.module#ShopModule',
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: 'location',
    pathMatch: 'prefix',
    loadChildren: '-location/location.module#LocationModule'
  },
  {
    path: 'user-center',
    pathMatch: 'full',
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

export const appSlice: Slice<AppNotes> = createRoot<AppNotes>(
  routes,
  { root: 'home', wildcard: 'notFound' },
  APP_HUB_KEY
);
