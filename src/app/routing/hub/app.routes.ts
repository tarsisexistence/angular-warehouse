import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appNotes } from './app.notes';
import { AppPreload } from 'app/app.preload';
import { CartComponent } from 'app/views/cart/containers/cart/cart.component';

export const routes: Routes = [
  {
    path: appNotes.home.path,
    pathMatch: 'full',
    loadChildren: appNotes.home.lazyPath,
    data: {
      preload: false,
      delay: false
    }
  },
  {
    path: appNotes.shop.path,
    pathMatch: 'prefix',
    loadChildren: appNotes.shop.lazyPath,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    data: {
      preload: false,
      delay: false
    }
  },
  {
    path: appNotes.location.path,
    pathMatch: 'prefix',
    loadChildren: appNotes.location.lazyPath,
    data: {
      preload: false,
      delay: false
    }
  },
  {
    path: appNotes.userCenter.path,
    pathMatch: 'full',
    loadChildren: appNotes.userCenter.lazyPath,
    data: {
      preload: false,
      delay: false
    }
  },
  {
    path: appNotes.cart.path,
    pathMatch: 'full',
    component: CartComponent
  },
  {
    path: appNotes.notFound.path,
    redirectTo: appNotes.home.path
  }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes, {
  enableTracing: false,
  initialNavigation: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'top',
  preloadingStrategy: AppPreload
});
