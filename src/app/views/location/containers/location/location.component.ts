import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';

import { GeocodingService } from 'location/shared/geocoding.service';
import { GeolocationService } from 'location/shared/geolocation.service';
import { MapService } from 'location/shared/map.service';

@Component({
  selector: 'location-feat',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationComponent implements OnInit {
  public center: google.maps.LatLng;
  public zoom: number;
  public disableDefaultUI: boolean;
  public disableDoubleClickZoom: boolean;
  public mapTypeId: google.maps.MapTypeId;
  public maxZoom: number;
  public minZoom: number;
  public styles: google.maps.MapTypeStyle[];
  public position: google.maps.LatLng;
  public title: string;
  public content: string;
  public address: string;
  public warning: boolean;
  public message: string;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly map: MapService,
    private readonly geolocation: GeolocationService,
    private readonly geocoding: GeocodingService,
    private readonly cdr: ChangeDetectorRef
  ) {
    this.center = new google.maps.LatLng(41.910943, 12.476358);
    this.zoom = 15;
    this.disableDefaultUI = true;
    this.disableDoubleClickZoom = false;
    this.mapTypeId = google.maps.MapTypeId.ROADMAP;
    this.maxZoom = 30;
    this.minZoom = 4;
    this.styles = [
      {
        featureType: 'landscape',
        stylers: [{ color: '#ffffff' }]
      }
    ];

    this.address = '';
    this.warning = false;
    this.message = '';
  }

  public ngOnInit(): void {
    const el: HTMLInputElement = this.elementRef.nativeElement.querySelector('#input-search');
    const autocomplete: google.maps.places.Autocomplete = new google.maps.places.Autocomplete(el, {
      types: ['address']
    });
    autocomplete.addListener('place_changed', () => {
      const place: google.maps.places.PlaceResult = autocomplete.getPlace();
      if (place.geometry === undefined || place.geometry === null) {
        return;
      }
      this.center = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
      this.zoom = 17;
      this.setMarker(this.center, 'search result', place.formatted_address);
      this.cdr.markForCheck();
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

    this.setMarker(this.center, 'Store locality', 'Store');
  }

  public getCurrentPosition(): void {
    this.warning = false;
    this.message = '';

    if (navigator.geolocation) {
      this.geolocation.getCurrentPosition().subscribe(
        (position: Position) => {
          if (this.center.lat() !== position.coords.latitude && this.center.lng() !== position.coords.longitude) {
            this.center = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            this.zoom = 18;

            this.geocoding
              .geocode(this.center)
              .forEach((results: google.maps.GeocoderResult[]) => {
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
        () => console.log('Geolocation service: completed.')
      );
    } else {
      this.message = "browser doesn't support geolocation";
      this.warning = true;
    }
  }

  public search(address: string): void {
    if (address === '') {
      return;
    }

    this.warning = false;
    this.message = '';
    this.geocoding
      .codeAddress(address)
      .forEach((results: google.maps.GeocoderResult[]) => {
        if (!this.center.equals(results[0].geometry.location)) {
          this.center = new google.maps.LatLng(results[0].geometry.location.lat(), results[0].geometry.location.lng());
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

  private setMarker(latLng: google.maps.LatLng, title: string, content: string): void {
    this.map.deleteMarkers();
    this.position = latLng;
    this.title = title;
    this.content = content;
  }
}
