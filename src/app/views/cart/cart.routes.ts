import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { cartRoute as route } from '$routes-entity/routes';
import { CartComponent } from '-cart/containers/cart/cart.component';

export const routes: Routes = [
  {
    path: route.root.path,
    component: CartComponent
  }
];

export const cartRouting: ModuleWithProviders = RouterModule.forChild(routes);
