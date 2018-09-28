import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { appRoute as ROUTE } from '$route-store/routes/app.route';
import { CartComponent } from '$cart/containers/cart/cart.component';

export const routes: Routes = [
  {
    path: ROUTE.home.path,
    pathMatch: 'full',
    loadChildren: ROUTE.home.lazyPath
  },
  {
    path: ROUTE.shop.path,
    pathMatch: 'prefix',
    loadChildren: ROUTE.shop.lazyPath,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: ROUTE.location.path,
    pathMatch: 'prefix',
    loadChildren: ROUTE.location.lazyPath
  },
  {
    path: ROUTE.userCenter.path,
    pathMatch: 'full',
    loadChildren: ROUTE.userCenter.lazyPath
  },
  {
    path: ROUTE.cart.path,
    pathMatch: 'full',
    component: CartComponent
  },
  {
    path: ROUTE.notFound.path,
    redirectTo: ROUTE.home.path
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  initialNavigation: 'enabled',
  onSameUrlNavigation: 'reload',
  enableTracing: false
});
