import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'shared/shared.module';
import { MarkerDirective } from './shared/marker.directive';
import { LocationHub } from './hub/location.hub';
import { LocationComponent } from './containers/location/location.component';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { LocationStocklistComponent } from './components/location-stocklist/location-stocklist.component';

@NgModule({
  imports: [CommonModule, FormsModule, LocationHub, SharedModule],
  declarations: [LocationMapComponent, MarkerDirective, LocationComponent, LocationStocklistComponent]
})
export class LocationModule {}
