import { RSRoutes } from '!app/core/route-store/interfaces/routes.interface';

export interface RSRoute {
  path: string;
  id?: number;
  component?: any;
  children?: RSRoutes<any>;
  lazyPath?: string;
  state?: string[];
}

export interface RSRouteState extends RSRoute {
  state: string[];
  id?: number;
  parentId?: number;
}

export interface RSAdductedRouteState extends RSRouteState {
  path: string;
  component?: any;
  lazyPath?: string;
}