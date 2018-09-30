export interface RSEntity {
  id: number;
  parentId: number;
  state: string[]
  path: string;
  route: string;
  lazyPath?: string;
}

export type RSEntities<T> = { [key in keyof T]: RSEntity }
