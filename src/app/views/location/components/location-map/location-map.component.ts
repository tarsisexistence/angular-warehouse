import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  ElementRef,
  ChangeDetectionStrategy
} from '@angular/core';

import { MapService } from '-location/shared/map.service';

@Component({
  selector: 'location-map',
  templateUrl: 'location-map.component.html',
  styleUrls: ['location-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationMapComponent implements OnInit, OnChanges {
  @Input() center: google.maps.LatLng; // Center location-map. Required.
  @Input() zoom: number; // The initial location-map zoom level. Required.
  @Input() disableDefaultUI: boolean; // Enables/disables all default UI.
  @Input() disableDoubleClickZoom: boolean; // Enables/disables zoom and center on double click. Enabled by default.
  @Input() mapTypeId: google.maps.MapTypeId; // The initial location-map mapTypeId. Defaults to ROADMAP.
  @Input() maxZoom: number; // The maximum zoom level which will be displayed on the location-map.
  @Input() minZoom: number; // The minimum zoom level which will be displayed on the location-map.
  @Input() styles: google.maps.MapTypeStyle[]; // Styles to apply to each of the default location-map types.

  constructor(public map: MapService, private elementRef: ElementRef) {
  }

  public ngOnInit(): void {
    const el: HTMLElement = this.elementRef.nativeElement.querySelector('#gmap');
    this.createMap(el);
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
    if (changes['center']) {
      this.map.setCenter(this.center);
    }

    if (changes['zoom']) {
      this.map.setZoom(this.zoom);
    }
  }

  private createMap(el: HTMLElement): void {
    this.map.initMap(el, {
      center: this.center,
      disableDefaultUI: this.disableDefaultUI,
      disableDoubleClickZoom: this.disableDoubleClickZoom,
      mapTypeId: this.mapTypeId,
      maxZoom: this.maxZoom,
      minZoom: this.minZoom,
      styles: this.styles,
      zoom: this.zoom
    });
  }
}
