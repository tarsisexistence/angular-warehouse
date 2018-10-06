export interface RSRoute {
  path: string;
  id?: number;
  component?: any;
  children?: RSRoutes<any>;
  lazyPath?: string;
  state?: string[];
}

export interface RSBaseRoute {
  root?;
}

export type RSRoutes<T> = { [key in keyof T]: RSRoute }
