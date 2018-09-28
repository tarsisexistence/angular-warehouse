export interface RSRouteEntity {
  id: number;
  parentId: number;
  state: string[]
  path: string;
  route: string;
  lazyPath?: string;
}

export type RSRouteEntities<T> = { [key in keyof T]: RSRouteEntity }
