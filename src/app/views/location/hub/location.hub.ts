import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { createFeature } from 'routeshub';

import { LocationNotes, LOCATION_UNIT_KEY } from 'location/hub/location.notes';
import { locationRoutes } from 'location/hub/location.routes';

export const locationConnector = createFeature<LocationNotes>(locationRoutes, {
  key: LOCATION_UNIT_KEY
});

@NgModule({
  imports: [RouterModule.forChild(locationRoutes)],
  exports: [RouterModule]
})
export class LocationHub {}
