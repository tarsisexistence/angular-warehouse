import { ModuleWithProviders } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { CartComponent } from '@cart/components/cart/cart.component';

export const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
];

export const cartRouting: ModuleWithProviders = RouterModule.forChild(routes);
