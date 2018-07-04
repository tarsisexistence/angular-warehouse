import { Injectable } from '@angular/core';
import {
	Observable,
	Observer
} from 'rxjs';

@Injectable()
export class GeocodingService {

	public geocoder: google.maps.Geocoder;

	constructor() {
		this.geocoder = new google.maps.Geocoder();
	}

	/**
	 * Reverse geocoding by location.
	 * Wraps the Google Maps API geocoding service into an observable.
	 * @param latLng Location
	 * @return An observable of GeocoderResult
	 */
	public geocode(latLng: google.maps.LatLng): Observable<google.maps.GeocoderResult[]> {
		return Observable.create((observer: Observer<google.maps.GeocoderResult[]>) => {
			// Invokes geocode method of Google Maps API geocoding.
			this.geocoder.geocode({ location: latLng }, (
				(results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
					if (status === google.maps.GeocoderStatus.OK) {
						observer.next(results);
						observer.complete();
					} else {
						console.log('Geocoding service: geocoder failed due to: ' + status);
						observer.error(status);
					}
				})
			);
		});
	}

	/**
	 * Geocoding service.
	 * Wraps the Google Maps API geocoding service into an observable.
	 * @param address The address to be searched
	 * @return An observable of GeocoderResult
	 */
	codeAddress(address: string): Observable<google.maps.GeocoderResult[]> {
		return Observable.create((observer: Observer<google.maps.GeocoderResult[]>) => {
			// Invokes geocode method of Google Maps API geocoding.
			this.geocoder.geocode(
				{ address: address },
				(results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
					if (status === google.maps.GeocoderStatus.OK) {
						observer.next(results);
						observer.complete();
					} else {
						const message = `Geocoding service: geocode was not successful for the following reason: ${status}`;
						console.log(message);
						observer.error(status);
					}
				}
			);
		});
	}
}
