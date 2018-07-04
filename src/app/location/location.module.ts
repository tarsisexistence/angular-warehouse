import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapComponent } from './google-map/google-map.component';
import { locationRouting } from './location.routes';
import { MarkerDirective } from './shared/marker.directive';
import { MapService } from './shared/map.service';
import { GeolocationService } from './shared/geolocation.service';
import { GeocodingService } from './shared/geocoding.service';
import { LocationComponent } from './location.component';
import { LocationResolver } from './location.resolver';
import { StocklistsComponent } from './stocklists/stocklists.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		locationRouting,
		MaterialModule
	],
	declarations: [
		GoogleMapComponent,
		MarkerDirective,
		LocationComponent,
		StocklistsComponent
	],
	providers: [
		MapService,
		GeolocationService,
		GeocodingService,
		LocationResolver
	]
})
export class LocationModule {
}
