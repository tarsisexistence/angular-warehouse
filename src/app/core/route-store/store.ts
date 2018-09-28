import { RSRoutes } from '$ngrs/interfaces/routes.interface';
import { assignId } from '$ngrs/helpers/assign-id';
import {
  RSRouteEntity,
  RSRouteEntities
} from '$ngrs/interfaces/route-entities.interface';

export class RouteStore {
  private entity: RSRouteEntities<any>;
  private static instance: RouteStore;

  public static getInstance(): RouteStore {
    if (!RouteStore.instance) {
      RouteStore.instance = new RouteStore();
    }

    return RouteStore.instance;
  }

  private static entitify<T>(parentEntity: RSRouteEntity | null, routes: RSRoutes<any>): RSRouteEntities<T> {
    return Object.keys(routes).reduce((acc: any, route: string) => {
      const { path, lazyPath } = routes[route];
      return ({
        ...acc,
        [route]: {
          id: assignId(),
          parentId: parentEntity !== null ? parentEntity.id : null,
          state: parentEntity !== null ? [...parentEntity.state, path] : [path],
          path,
          lazyPath,
          route
        }
      });
    }, {});
  }

  public createRoot<T>(routes: RSRoutes<any>): RSRouteEntities<T> {
    if (this.entity) {
      throw `Route store is already created!`;
    }

    this.entity = RouteStore.entitify<T>(null, routes);

    return this.entity as RSRouteEntities<T>;
  }

  public createFeature<T>(parentRoute: RSRouteEntity, routes: RSRoutes<any>): RSRouteEntities<T> {
    const featureEntity = RouteStore.entitify<T>(parentRoute, routes);

    this.entity = Object.assign({}, this.entity, featureEntity);

    return featureEntity as RSRouteEntities<T>;
  }
}
