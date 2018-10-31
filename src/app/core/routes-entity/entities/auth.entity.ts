import { authRoute } from '$routes-entity/routes';
import { RSBaseRoute } from '$routes-entity/interfaces';
import { routeStore } from '$routes-entity/store';
import { app } from './app.entity';

export const auth = routeStore.createFeature<RSBaseRoute>(app.home, authRoute);
