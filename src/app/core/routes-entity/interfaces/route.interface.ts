import { RSRoutes } from '$routes-entity/interfaces';

export interface RSRoute {
  path: string;
  id?: number;
  component?: any;
  children?: RSRoutes<any>;
  lazyPath?: string;
  state?: string[];
}
