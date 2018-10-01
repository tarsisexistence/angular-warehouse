export interface RSEntityStructure {
  id: number;
  parentId: number;
  state: string[]
  path: string;
  route: string;
  lazyPath?: string;
}

export type RSEntity<T> = { [key in keyof T]: RSEntityStructure }

export type RSEntities<T> = { [key in keyof T]: RSEntity<T[key]> }

export type RSRoutesEntity<T> = { [key in keyof T]: T[key] }


