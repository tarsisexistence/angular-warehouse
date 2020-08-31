import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';

import { MapService } from 'location/shared/map.service';
import { OnChange } from 'shared/decorators/onChange.decorator';

@Component({
  selector: 'location-map',
  templateUrl: 'location-map.component.html',
  styleUrls: ['location-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationMapComponent implements OnInit {
  @Input() public mapTypeId: google.maps.MapTypeId;
  @Input() public maxZoom: number;
  @Input() public minZoom: number;
  @Input() public styles: google.maps.MapTypeStyle[];
  @Input() public disableDefaultUI: boolean;
  @Input() public disableDoubleClickZoom: boolean;

  @Input()
  @OnChange<google.maps.LatLng>(function (center: google.maps.LatLng): void {
    this.map.setCenter(center);
  })
  public center: google.maps.LatLng;

  @Input()
  @OnChange<number>(function (zoom: number): void {
    this.map.setZoom(zoom);
  })
  public zoom: number;

  constructor(public map: MapService, private readonly elementRef: ElementRef) {}

  public ngOnInit(): void {
    const el: HTMLElement = this.elementRef.nativeElement.querySelector('#gmap');
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
