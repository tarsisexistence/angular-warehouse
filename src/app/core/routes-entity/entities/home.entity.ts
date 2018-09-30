import { homeRoute } from '$routes-entity/routes';
import { RSBaseRoute } from '$routes-entity/interfaces';
import { routeStore } from '$routes-entity/store';
import { app } from './app.entity';

export const home = routeStore.createFeature<RSBaseRoute>(app.home, homeRoute);