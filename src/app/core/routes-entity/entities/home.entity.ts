import { homeRoute } from '$routes-entity/routes';
import { RSBaseRoute } from '$routes-entity/interfaces';
import { routeStore } from '$routes-entity/store';
import { appEntity } from './app.entity';

export const homeEntity = routeStore.createFeature<RSBaseRoute>(appEntity.home, homeRoute);