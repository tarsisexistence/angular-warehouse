import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appRoute as route } from '$routes-entity/routes';
import { CartComponent } from '$cart/containers/cart/cart.component';

export const routes: Routes = [
  {
    path: route.home.path,
    pathMatch: 'full',
    loadChildren: route.home.lazyPath
  },
  {
    path: route.shop.path,
    pathMatch: 'prefix',
    loadChildren: route.shop.lazyPath,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: route.location.path,
    pathMatch: 'prefix',
    loadChildren: route.location.lazyPath
  },
  {
    path: route.userCenter.path,
    pathMatch: 'full',
    loadChildren: route.userCenter.lazyPath
  },
  {
    path: route.cart.path,
    pathMatch: 'full',
    component: CartComponent
  },
  {
    path: route.notFound.path,
    redirectTo: route.home.path
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  enableTracing: false,
  initialNavigation: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'top'
});
