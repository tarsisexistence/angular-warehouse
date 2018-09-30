import { RSRoute } from '!app/core/route-store/interfaces/route.interface';

export type RSRoutes<T> = { [key in keyof T]: RSRoute }

