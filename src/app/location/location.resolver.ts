import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	Resolve,
	RouterStateSnapshot
} from '@angular/router';

@Injectable()
export class LocationResolver implements Resolve<boolean> {

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		return route.routeConfig.path === '/contacts';
	}
}
