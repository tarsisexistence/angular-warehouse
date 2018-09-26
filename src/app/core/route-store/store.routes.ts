import { RSRoutes } from '!app/core/route-store/interfaces/routes.interface';
import { RSRoute } from '!app/core/route-store/interfaces/route.interface';

export class RouteStore {
  private routesState: RSRoutes<string>;
  private static instance: RouteStore;

  public static getInstance(): RouteStore {
    if (!RouteStore.instance) {
      RouteStore.instance = new RouteStore();
    }
    return RouteStore.instance;
  }

  public createRoutes(routes: any): void {
    if (this.routesState) {
      console.error('Root of route store is already created.');
      return;
    }

    this.routesState = routes;
  }

  public createFeatureRoutes(parentRoute: RSRoute, routes: RSRoutes<any>): void {
    if (parentRoute.children === undefined) {
      parentRoute.children = { ...routes };
      return;
    }

    parentRoute.children = {
      ...parentRoute.children,
      ...routes
    };
  }
}

