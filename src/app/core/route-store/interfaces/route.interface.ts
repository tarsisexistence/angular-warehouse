import { RSRoutes } from '!app/core/route-store/interfaces/routes.interface';

export interface RSRoute {
  path: string;
  component?: any;
  lazyPath?: string;
  children?: RSRoutes<any>;
}