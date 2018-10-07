import { RSStateParams } from '$core/routes-entity';

export interface RSStructure {
  id: number;
  parentId: number;
  path: string;
  state: string[];
  stateFn: (params?: RSStateParams, ...restParams: RSStateParams[]) => string[];
  route: string;
  lazyPath?: string;
}

export type RSEntity<T> = { [key in keyof T]: RSStructure }

export type RSEntities<T> = { [key in keyof T]: T[key] }