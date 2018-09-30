import { assignId } from './assign-id';
import {
  RSEntities,
  RSEntity,
  RSRoutes
} from '$routes-entity/interfaces';

export function entitify<T>(parentEntity: RSEntity | null, routes: RSRoutes<any>): RSEntities<T> {
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