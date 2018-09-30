export interface RSEntity {
  id: number;
  parentId: number;
  state: string[]
  path: string;
  route: string;
  lazyPath?: string;
}

export type RSEntities<T> = { [key in keyof T]: RSEntity }

export type RSRoutesEntity<T> = { [key in keyof T]: T[key] }

export type RSApplicationEntity<T> = { [key in keyof T]: RSEntities<T[key]> }