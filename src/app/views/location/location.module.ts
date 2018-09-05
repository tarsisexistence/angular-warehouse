import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@shared/material/material.module';
import { locationRouting } from '@location/location.routes';
import { GeocodingService } from '@location/shared/geocoding.service';
import { GeolocationService } from '@location/shared/geolocation.service';
import { MapService } from '@location/shared/map.service';
import { MarkerDirective } from '@location/shared/marker.directive';
import { LocationComponent } from '@location/containers/location/location.component';
import { LocationMapComponent } from '@location/components/location-map/location-map.component';
import { LocationStocklistComponent } from '@location/components/location-stocklist/location-stocklist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    locationRouting,
    MaterialModule
  ],
  declarations: [
    LocationMapComponent,
    MarkerDirective,
    LocationComponent,
    LocationStocklistComponent
  ],
  providers: [
    GeocodingService,
    GeolocationService,
    MapService
  ]
})
export class LocationModule {
}
