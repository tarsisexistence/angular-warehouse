export interface RSBaseRoute {
  root?;
}

export interface RSRoute {
  path: string;
  id?: number;
  lazyPath?: string;
  state?: string[];
}

export type RSRoutes<T> = { [key in keyof T]: RSRoute }


