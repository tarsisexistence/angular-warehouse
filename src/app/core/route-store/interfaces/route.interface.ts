import { RSRoutes } from '!app/core/route-store/interfaces/routes.interface';

export interface RSRoute {
  path: string;
  id?: number;
  component?: any;
  children?: RSRoutes<any>;
  lazyPath?: string;
  state?: string[];
}
