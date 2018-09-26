import { RSRoute } from '!app/core/route-store/interfaces/route.interface';

// export interface RSRoutes<T> {
//   [key: T]: RSRoute;
// }
export type RSRoutes<T> = { [key in keyof T]: RSRoute }
// export type RSRoutes<T> = { [type in T]: RSRoute }
// export type RSRoutes<T> = { [key in T]: RSRoute }
// export type RSRoutes<T> = { [key: keyof T]: RSRoute, root?: RSRoute }