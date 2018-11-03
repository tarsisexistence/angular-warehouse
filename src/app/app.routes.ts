import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appRoute as route } from '$routes-entity/routes';
import { AppPreload } from '~app/app.preload';

export const routes: Routes = [
  {
    path: route.home.path,
    pathMatch: 'full',
    loadChildren: route.home.lazyPath,
    data: {
      preload: false,
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
      delay: false
    }
  },
  {
    path: route.location.path,
    pathMatch: 'prefix',
    loadChildren: route.location.lazyPath,
    data: {
      preload: false,
      delay: false
    }
  },
  {
    path: route.userCenter.path,
    pathMatch: 'full',
    loadChildren: route.userCenter.lazyPath,
    data: {
      preload: false,
      delay: false
    }
  },
  {
    path: route.cart.path,
    pathMatch: 'full',
    loadChildren: route.cart.lazyPath,
    data: {
      preload: true,
      delay: false
    }
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
  scrollPositionRestoration: 'top',
  preloadingStrategy: AppPreload
});
