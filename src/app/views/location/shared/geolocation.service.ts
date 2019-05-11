import { Injectable } from '@angular/core';

import { Observable, Observer } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GeolocationService {
  public getCurrentPosition(): Observable<Position> {
    return Observable.create((observer: Observer<Position>) => {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          observer.next(position);
          observer.complete();
        },
        (error: PositionError) => {
          observer.error(error);
        }
      );
    });
  }
}
