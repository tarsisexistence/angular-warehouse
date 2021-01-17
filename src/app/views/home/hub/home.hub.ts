import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { createFeature } from 'routeshub';

import { homeRoutes } from 'home/hub/home.routes';
import { HomeNotes, HOME_UNIT_KEY } from 'home/hub/home.notes';

export const homeConnector = createFeature<HomeNotes>(homeRoutes, {
  key: HOME_UNIT_KEY
});

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeHub {}
