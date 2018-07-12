import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { LocationModule } from './location.module';

@Injectable({ providedIn: LocationModule })
export class LocationResolver implements Resolve<boolean> {

  resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): boolean {
    return route.routeConfig.path === '/contacts';
  }
}
