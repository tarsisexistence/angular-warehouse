import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit
} from '@angular/core';

import { MapService } from '-location/shared/map.service';

@Component({
  selector: 'location-map',
  templateUrl: 'location-map.component.html',
  styleUrls: ['location-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationMapComponent implements OnInit {
  @Input()
  public disableDefaultUI: boolean; // Enables/disables all default UI.
  @Input()
  public mapTypeId: google.maps.MapTypeId; // The initial location-map mapTypeId. Defaults to ROADMAP.
  @Input()
  public maxZoom: number; // The maximum zoom level which will be displayed on the location-map.
  @Input()
  public minZoom: number; // The minimum zoom level which will be displayed on the location-map.
  @Input()
  public styles: google.maps.MapTypeStyle[]; // Styles to apply to each of the default location-map types.
  @Input()
  public disableDoubleClickZoom: boolean; // Enables/disables zoom and center on double click. Enabled by def.

  @Input()
  public set center(center: google.maps.LatLng) {
    this.map.setCenter(center);
    this._center = center;
  }

  public get center(): google.maps.LatLng {
    return this._center;
  }

  private _center: google.maps.LatLng; // Center location-map. Required.

  @Input()
  public set zoom(zoom: number) {
    this.map.setZoom(zoom);
    this._zoom = zoom;
  }

  public get zoom(): number {
    return this._zoom;
  }

  private _zoom: number; // The initial location-map zoom level. Required.

  constructor(
    public map: MapService,
    private readonly elementRef: ElementRef
  ) {}

  public ngOnInit(): void {
    const el: HTMLElement = this.elementRef.nativeElement.querySelector(
      '#gmap'
    );
    this.createMap(el);
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
