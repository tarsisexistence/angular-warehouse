// import { TypedRoute } from '@routerkit/core';
type TypedRoute<T> = T;
export type TypedRoutes = {
  root: TypedRoute<['/']>;
  shop: {
    root: TypedRoute<['/', 'shop']>;
    all: TypedRoute<['/', 'shop', 'all']>;
  } & {
    [category: string]: TypedRoute<['/', 'shop', string]>;
  };
  location: {
    root: TypedRoute<['/', 'location']>;
    map: TypedRoute<['/', 'location', 'map']>;
    stocklist: TypedRoute<['/', 'location', 'stocklist']>;
  };
  'user-center': {
    [id: string]: TypedRoute<['/', 'user-center', string]>;
  };
  cart: TypedRoute<['/', 'cart']>;
} & {
  [wildcard: string]: TypedRoute<['/', string]>;
};
