import { RSAdductedRouteState } from '$ngrs/interfaces/route.interface';
import { RSRoutesState } from '$ngrs/interfaces/routes.interface';

export function adduction(routes: RSRoutesState<any>): RSAdductedRouteState {
  return Object.keys(routes).reduce((acc: RSAdductedRouteState, route: string) => {
    const { children, ...other } = routes[route];
    const nested: RSAdductedRouteState = children ? this.adduction(children) : {};

    return {
      ...acc,
      ...nested,
      [route]: other
    };
  }, {} as RSAdductedRouteState);
}