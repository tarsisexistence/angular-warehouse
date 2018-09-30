import { RSRoute } from '$routes-entity/interfaces';

export type RSRoutes<T> = { [key in keyof T]: RSRoute }

