import { Routes } from '@angular/router';

import { appNotes } from './app.notes';
import { CartComponent } from 'app/views/cart/containers/cart/cart.component';

export const routes: Routes = [
  {
    path: appNotes.home.path,
    pathMatch: 'full',
    loadChildren: appNotes.home.lazy,
    data: { preload: true }
  },
  {
    path: appNotes.shop.path,
    pathMatch: 'prefix',
    loadChildren: appNotes.shop.lazy,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  },
  {
    path: appNotes.location.path,
    pathMatch: 'prefix',
    loadChildren: appNotes.location.lazy
  },
  {
    path: appNotes.userCenter.path,
    pathMatch: 'full',
    loadChildren: appNotes.userCenter.lazy
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
