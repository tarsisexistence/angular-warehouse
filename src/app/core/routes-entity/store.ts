import { entitify } from '$routes-entity/helpers';
import { Entity } from '$routes-entity/entity';
import {
  RSEntity,
  RSEntities,
  RSRoutes,
  RSRoutesEntity
} from '$routes-entity/interfaces';

export class RouteStore<C> {
  public get entity(): RSRoutesEntity<C> {
    return this._entity;
  }

  private _entity: RSRoutesEntity<C>;

  public static inject<C>(): RouteStore<C> {
    if (!RouteStore.inject['instance']) {
      RouteStore.inject['instance'] = new RouteStore<C>();
    }

    return RouteStore.inject['instance'];
  }

  public createRoot<T>(routes: RSRoutes<T>): RSEntities<T> {
    if (this._entity) {
      // TODO: rename route store
      throw `Route store is already created!`;
    }

    const rootEntity = entitify<T>(null, routes);

    this.initEntity();
    this.updateEntity('app', rootEntity);

    return rootEntity as RSEntities<T>;
  }

  public createFeature<T>(parentRoute: RSEntity, routes: RSRoutes<T>): RSEntities<T> {
    const featureEntity = entitify<T>(parentRoute, routes);

    this.updateEntity<RSEntities<T>>(parentRoute.route, featureEntity);

    return featureEntity;
  }

  public getEntity(): RSRoutesEntity<C> {
    return this.entity;
  }

  private initEntity() {
    this._entity = {} as RSRoutesEntity<C>;
  }

  private updateEntity<T>(route: string, entity: T): void {
    this._entity = Object.assign(
        {},
        this._entity,
        { [route]: entity }
    );
  }
}

export const routeStore = RouteStore.inject<Entity>();
