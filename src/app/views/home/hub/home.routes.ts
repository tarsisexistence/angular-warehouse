import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { homeNotes as home } from './home.notes';
import { HomeComponent } from 'app/views/home/containers/home/home.component';

export const routes: Routes = [
  {
    path: home.root.path,
    component: HomeComponent
  }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(routes);
