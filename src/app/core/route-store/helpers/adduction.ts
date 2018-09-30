import { RSRoute } from '$ngrs/interfaces';

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

interface RSRouteState extends RSRoute {
  state: string[];
  id?: number;
  parentId?: number;
}

interface RSAdductedRouteState extends RSRouteState {
  path: string;
  component?: any;
  lazyPath?: string;
}

type RSRoutesState<T> = { [key in keyof T]: RSRouteState }
