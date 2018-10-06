export interface RSStructure {
  id: number;
  parentId: number;
  state: string[]
  path: string;
  route: string;
  lazyPath?: string;
}

export type RSEntity<T> = { [key in keyof T]: RSStructure }

export type RSEntities<T> = { [key in keyof T]: T[key] }