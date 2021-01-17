import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { connectFeatures, createRoot } from 'routeshub';

import { shopConnector } from 'shop/hub/shop.hub';
import { userCenterConnector } from 'user-center/hub/user-center.hub';
import { locationConnector } from 'location/hub/location.hub';
import { homeConnector } from 'home/hub/home.hub';
import { CustomPreloadingStrategy } from 'hub/preloading';
import { appRoutes } from './app.routes';
import { AppNotes, APP_UNIT_KEY } from './app.notes';

createRoot<AppNotes>(appRoutes, {
  key: APP_UNIT_KEY,
  routeName: { root: 'home', wildcard: 'notFound' }
});

connectFeatures<AppNotes>(APP_UNIT_KEY, {
  home: homeConnector,
  shop: shopConnector,
  userCenter: userCenterConnector,
  location: locationConnector
});

export const appRouting: ModuleWithProviders<AppHub> = RouterModule.forRoot(appRoutes, {
  enableTracing: false,
  initialNavigation: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'top',
  preloadingStrategy: CustomPreloadingStrategy,
  relativeLinkResolution: 'legacy'
});

@NgModule({
  imports: [appRouting],
  exports: [RouterModule]
})
export class AppHub {}
