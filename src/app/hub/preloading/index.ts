import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

import { Observable, of } from 'rxjs';

import { preloadingConnection } from './preloading-connection';

@Injectable()
export class CustomPreloadingStrategy implements PreloadingStrategy {
  public preload(route: Route, load: () => Observable<any>): Observable<any> {
    const hasPreloadMark = route.data && route.data.preload;
    return hasPreloadMark || preloadingConnection() ? load() : of(null);
  }
}
