import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of } from 'rxjs';
import { preloadConnection } from './preload-connection';

export class CustomPreloadingStrategy implements PreloadingStrategy {
  public preload(route: Route, load: () => Observable<any>): Observable<any> {
    const hasPreloadMark = route.data && route.data.preload;
    return hasPreloadMark || preloadConnection() ? load() : of(null);
  }
}
