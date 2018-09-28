import {
  RSRoute,
  RSRouteState
} from '!app/core/route-store/interfaces/route.interface';

export type RSRoutes<T> = { [key in keyof T]: RSRoute }
export type RSRoutesState<T> = { [key in keyof T]: RSRouteState }

export interface RSStates {
  root?;
}

