import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authRoute as route } from '$routes-entity/routes';

export const routes: Routes = [
  {
    path: route.root.path,
    redirectTo: '/home'
  }
];

export const authRouting: ModuleWithProviders = RouterModule.forChild(routes);
