import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export class Preloading implements PreloadingStrategy {
  public preload(route: Route, load: () => Observable<any>): Observable<any> {
    const loadRoute = (delay: boolean) =>
      delay === false ? load() : timer(300).pipe(mergeMap(load));

    return route.data && route.data['preload']
      ? loadRoute(route.data['delay'])
      : of(null);
  }
}
