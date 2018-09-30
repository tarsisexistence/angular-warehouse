import { assignId } from '$routes-entity/helpers';
import {
  RSEntity,
  RSEntities,
  RSRoutes
} from '$routes-entity/interfaces';

export class RouteStore {
  private entity: RSEntities<any>;
  private static instance: RouteStore;

  public static getInstance(): RouteStore {
    if (!RouteStore.instance) {
      RouteStore.instance = new RouteStore();
    }

    return RouteStore.instance;
  }

  public createRoot<T>(routes: RSRoutes<T>): RSEntities<T> {
    if (this.entity) {
      throw `Route store is already created!`;
    }

    this.entity = RouteStore.entitify<T>(null, routes);

    return this.entity as RSEntities<T>;
  }

  public createFeature<T>(parentRoute: RSEntity, routes: RSRoutes<T>): RSEntities<T> {
    const featureEntity = RouteStore.entitify<T>(parentRoute, routes);

    this.entity = Object.assign({}, this.entity, featureEntity);

    return featureEntity as RSEntities<T>;
  }

  private static entitify<T>(parentEntity: RSEntity | null, routes: RSRoutes<any>): RSEntities<T> {
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
}

export const routeStore = RouteStore.getInstance();
