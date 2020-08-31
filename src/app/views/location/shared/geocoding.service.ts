import { Injectable } from '@angular/core';

import { Observable, Observer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GeocodingService {
  public geocoder: google.maps.Geocoder;

  constructor() {
    this.geocoder = new google.maps.Geocoder();
  }

  public geocode(latLng: google.maps.LatLng): Observable<google.maps.GeocoderResult[]> {
    return Observable.create((observer: Observer<google.maps.GeocoderResult[]>) => {
      this.geocoder.geocode(
        { location: latLng },
        (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
          if (status === google.maps.GeocoderStatus.OK) {
            observer.next(results);
            observer.complete();
          } else {
            observer.error(status);
          }
        }
      );
    });
  }

  public codeAddress(address: string): Observable<google.maps.GeocoderResult[]> {
    return Observable.create((observer: Observer<google.maps.GeocoderResult[]>) => {
      this.geocoder.geocode(
        { address },
        (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
          if (status === google.maps.GeocoderStatus.OK) {
            observer.next(results);
            observer.complete();
          } else {
            observer.error(status);
          }
        }
      );
    });
  }
}
