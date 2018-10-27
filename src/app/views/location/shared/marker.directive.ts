import {
  Directive,
  Input
} from '@angular/core';

import { MapService } from '-location/shared/map.service';

@Directive({
  selector: '[googleMapMarker]'
})
export class MarkerDirective {
  @Input() public title: string;
  @Input() public content: string;

  @Input()
  set position(position: google.maps.LatLng) {
    this.map.addMarker(position, this.title, this.content);
    this._position = position;
  }

  get position(): google.maps.LatLng {
    return this._position;
  }

  private _position: google.maps.LatLng;

  constructor(public map: MapService) {
  }
}
