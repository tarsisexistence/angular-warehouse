import { RSRoutes } from '!app/route-store/interfaces/routes.interface';

export interface RSRoute {
  path: string;
  component?: any;
  lazyPath?: string;
  children?: RSRoutes<any>;
}