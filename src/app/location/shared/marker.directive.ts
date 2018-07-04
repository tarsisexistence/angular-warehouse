import {
	Directive,
	Input,
	OnChanges,
	SimpleChange
} from '@angular/core';

import { MapService } from './map.service';

@Directive({
	selector: '[googleMapMarker]'
})
export class MarkerDirective implements OnChanges {
	@Input() position: google.maps.LatLng; // Marker position. Required.
	@Input() title: string; // The marker's title will appear as a tooltip.
	@Input() content: string; // An InfoWindow's content is displayed in a popup window above the map, at a given
                            // location.

	constructor(public map: MapService) {
	}

	/**
	 * This method is invoked when the marker properties change.
	 */
	public ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
		// Creates the marker and the info window.
		if (changes['position']) {
			this.map.addMarker(this.position, this.title, this.content);
		}
	}
}
