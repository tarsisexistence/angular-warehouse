import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appRoute as route } from '$routes-entity/routes';
import { CartComponent } from '$cart/containers/cart/cart.component';
import { AppPreload } from '~app/app.preload';

export const routes: Routes = [
  {
    path: route.home.path,
    pathMatch: 'full',
    loadChildren: route.home.lazyPath,
    data: {
      preload: true,
      delay: false
    }
  },
  {
    path: route.shop.path,
    pathMatch: 'prefix',
    loadChildren: route.shop.lazyPath,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    data: {
      preload: false,
      delay: true
    }
  },
  {
    path: route.location.path,
    pathMatch: 'prefix',
    loadChildren: route.location.lazyPath,
    data: {
      preload: false,
      delay: true
    }
  },
  {
    path: route.userCenter.path,
    pathMatch: 'full',
    loadChildren: route.userCenter.lazyPath,
    data: {
      preload: false,
      delay: true
    }
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
  initialNavigation: 'enabled',
  onSameUrlNavigation: 'reload',
  enableTracing: false,
  preloadingStrategy: AppPreload
});
