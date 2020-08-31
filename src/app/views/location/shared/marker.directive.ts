import { Directive, Input } from '@angular/core';

import { MapService } from 'location/shared/map.service';
import { OnChange } from 'shared/decorators/onChange.decorator';

@Directive({
  selector: '[googleMapMarker]'
})
export class MarkerDirective {
  @Input() public title: string;
  @Input() public content: string;

  @Input()
  @OnChange<google.maps.LatLng>(function (position: google.maps.LatLng): void {
    this.map.addMarker(position, this.title, this.content);
    this.position = position;
  })
  public position: google.maps.LatLng;

  constructor(public map: MapService) {}
}
