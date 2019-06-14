import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'app/views/home/containers/home/home.component';
import { createFeature, Slice } from 'routeshub';
import { appSlice } from '-routing/hub/app.routes';
import { HOME_HUB_KEY, HomeNotes } from './home.notes';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(routes);

export const homeSlice: Slice<HomeNotes> = createFeature<HomeNotes>(
  appSlice.home,
  routes,
  HOME_HUB_KEY
);
