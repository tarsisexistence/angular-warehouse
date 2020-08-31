import { Injectable } from '@angular/core';

import { noop, of } from 'rxjs';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MapService {
  private map: google.maps.Map;
  private markers: google.maps.Marker[] = [];

  public initMap(el: HTMLElement, mapOptions: any): void {
    this.map = new google.maps.Map(el, mapOptions);
    this.resize();
    google.maps.event.addDomListener(window, 'resize', this.resize);
  }

  public setCenter(latLng: google.maps.LatLng): void {
    if (this.map === null || this.map === undefined || latLng === null) {
      return;
    }

    this.map.panTo(latLng);
  }

  public setZoom(zoom: number): void {
    if (this.map === null || this.map === undefined) {
      return;
    }

    this.map.setZoom(zoom);
  }

  public addMarker(latLng: google.maps.LatLng, title?: string, contentString?: string): void {
    if (this.map != null && latLng != null) {
      const marker: google.maps.Marker = new google.maps.Marker({
        position: latLng,
        title
      });
      marker.setMap(this.map);
      if (contentString !== null) {
        const infoWindow: google.maps.InfoWindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: this.map.getDiv().clientWidth
        });
        marker.addListener('click', () => {
          infoWindow.open(this.map, marker);
        });
      }

      this.markers.push(marker);
    }
  }

  public deleteMarkers(): void {
    this.markers = this.markers.filter((marker) => {
      marker.setMap(null);
      return false;
    });
  }

  public resize(): void {
    const center: google.maps.LatLng = this.map.getCenter();

    of(true)
      .pipe(
        first(),
        delay(0),
        tap(() => {
          google.maps.event.trigger(this.map, 'resize');
          this.map.setCenter(center);
        })
      )
      .subscribe(noop);
  }
}
