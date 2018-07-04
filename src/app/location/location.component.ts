import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit
} from '@angular/core';
import { MapService } from './shared/map.service';
import { GeolocationService } from './shared/geolocation.service';
import { GeocodingService } from './shared/geocoding.service';
import {} from '@types/googlemaps';

@Component({
  selector: 'location-feat',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent implements OnInit {
  public center: google.maps.LatLng; // Center map. Required.
  // MapOptions object specification.
  // The initial map zoom level. Required.
  public zoom: number;
  public disableDefaultUI: boolean;
  public disableDoubleClickZoom: boolean;
  public mapTypeId: google.maps.MapTypeId;
  public maxZoom: number;
  public minZoom: number;
  public styles: google.maps.MapTypeStyle[];
  public position: google.maps.LatLng; // Marker position. Required.
  public title: string; // Marker title.
  public content: string; // Info window.
  public address: string; // Address to be searched.
  public warning: boolean; // Warning flag
  public message: string; // Warning message.

  constructor(
      private elementRef: ElementRef,
      private map: MapService,
      private geolocation: GeolocationService,
      private geocoding: GeocodingService,
      private cdr: ChangeDetectorRef
  ) {
    this.center = new google.maps.LatLng(41.910943, 12.476358);
    this.zoom = 15;

    // Other options.
    this.disableDefaultUI = true;
    this.disableDoubleClickZoom = false;
    this.mapTypeId = google.maps.MapTypeId.ROADMAP;
    this.maxZoom = 30;
    this.minZoom = 4;
    // Styled Maps: https://developers.google.com/maps/documentation/javascript/styling
    this.styles = [
      {
        featureType: 'landscape',
        stylers: [
          { color: '#ffffff' }
        ]
      }
    ];

    // Initially the marker isn't set.
    this.address = '';

    this.warning = false;
    this.message = '';
  }

  public ngOnInit(): void {
    // Autocomplete: it needs 'places' library.
    const el: HTMLInputElement = this.elementRef.nativeElement.querySelector('#input-search');
    const autocomplete: google.maps.places.Autocomplete = new google.maps.places.Autocomplete(el, {
      types: ['address']
    });
    autocomplete.addListener('place_changed', () => {
      const place: google.maps.places.PlaceResult = autocomplete.getPlace();
      if (place.geometry === undefined || place.geometry === null) {
        return;
      }
      // New center object: triggers OnChanges.
      this.center = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
      this.zoom = 17;
      this.setMarker(this.center, 'search result', place.formatted_address);
      this.cdr.detectChanges(); // TODO: FIGURE OUT!
    });

    this.storeLocation();
  }

  public storeLocation(): void {
    const position = {
      lat: 50.43861099999999,
      lng: 30.52305590000003
    };
    this.center = new google.maps.LatLng(position.lat, position.lng);
    this.zoom = 18;

    this.setMarker(this.center, 'locality', 'store');
  }

  public getCurrentPosition(): void {
    this.warning = false;
    this.message = '';

    if (navigator.geolocation) {
      this.geolocation.getCurrentPosition().subscribe((position: Position) => {
            if (this.center.lat() !== position.coords.latitude &&
                this.center.lng() !== position.coords.longitude) {
              // New center object: triggers OnChanges.
              this.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
              this.zoom = 18;

              // Translates the location into address.
              this.geocoding.geocode(this.center).forEach((results: google.maps.GeocoderResult[]) => {
                    this.setMarker(this.center, 'your locality', results[0].formatted_address);
                    this.cdr.markForCheck();
                  })
                  .then(() => console.log('Geocoding service: completed.'))
                  .catch((error: google.maps.GeocoderStatus) => {
                    if (error === google.maps.GeocoderStatus.ZERO_RESULTS) {
                      this.message = 'zero results';
                      this.warning = true;
                    }
                  });

              this.cdr.markForCheck();
            }
          },
          (error: PositionError) => {
            if (error.code > 0) {
              switch (error.code) {
                case error.PERMISSION_DENIED:
                  this.message = 'permission denied';
                  break;
                case error.POSITION_UNAVAILABLE:
                  this.message = 'position unavailable';
                  break;
                case error.TIMEOUT:
                  this.message = 'position timeout';
                  break;
              }
              this.warning = true;
            }
          },
          () => console.log('Geolocation service: completed.'));

    } else {
      this.message = 'browser doesn\'t support geolocation';
      this.warning = true;
    }
  }

  public search(address: string): void {
    if (address !== '') {
      this.warning = false;
      this.message = '';
      // Converts the address into geographic coordinates.
      // Here 'forEach' resolves the promise faster than 'subscribe'.
      this.geocoding.codeAddress(address).forEach(
          (results: google.maps.GeocoderResult[]) => {
            if (!this.center.equals(results[0].geometry.location)) {
              // New center object: triggers OnChanges.
              this.center = new google.maps.LatLng(
                  results[0].geometry.location.lat(),
                  results[0].geometry.location.lng()
              );
              this.zoom = 18;

              this.setMarker(this.center, 'search result', results[0].formatted_address);
            }
          })
          .then(() => {
            this.address = '';
            console.log('Geocoding service: completed.');
          })
          .catch((error: google.maps.GeocoderStatus) => {
            if (error === google.maps.GeocoderStatus.ZERO_RESULTS) {
              this.message = 'zero results';
              this.warning = true;
            }
          });
    }
  }

  // Sets the marker & the info window.
  private setMarker(latLng: google.maps.LatLng, title: string, content: string): void {
    this.map.deleteMarkers();
    // Sets the marker.
    this.position = latLng;
    this.title = title;
    // Sets the info window.
    this.content = content;
  }
}
