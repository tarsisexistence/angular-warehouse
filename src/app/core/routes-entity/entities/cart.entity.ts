import { cartRoute } from '$routes-entity/routes';
import { RSBaseRoute } from '$routes-entity/interfaces';
import { routeStore } from '$routes-entity/store';
import { app } from './app.entity';

export const cart = routeStore.createFeature<RSBaseRoute>(app.home, cartRoute);
