import { assignId } from './assign-id';
import {
  RSStructure,
  RSEntity,
  RSRoutes,
  RSStateParams
} from '$routes-entity/interfaces';

export function entitify<T>(parentEntity: RSStructure | null, routes: RSRoutes<any>): RSEntity<T> {
  return Object.keys(routes).reduce((acc: any, route: string): RSEntity<T> => {
    const { path, lazyPath } = routes[route];

    return ({
      ...acc,
      [route]: {
        id: assignId(),
        parentId: parentEntity !== null ? parentEntity.id : null,
        state: parentEntity !== null ? [...parentEntity.state, path] : ['/', path],
        stateFn,
        path,
        lazyPath,
        route
      }
    });
  }, {});
}

function stateFn(params?: RSStateParams, ...rest: RSStateParams[]): string[] {
  // TODO: memoize
  if (!params) {
    return;
  }

  if (rest.length === 0) {
    return handleState(params, this.state);
  }

  const parameters = rest.length === 0 ? params : reduceParams(params, rest);
  return handleState(parameters, this.state);
}

function handleState(params: RSStateParams, state?: string[]): string[] {
  return Object.keys(params).reduce((state: string[], param: string): string[] => (
      state.map((state: string): string => state === `:${param}` ? params[param] : state)
  ), state);
}

function reduceParams(params: RSStateParams, restParams: RSStateParams[]): RSStateParams {
  return restParams.reduce((acc: RSStateParams, param: RSStateParams): RSStateParams => (
      {
        ...acc,
        ...param
      }
  ), params);
}
